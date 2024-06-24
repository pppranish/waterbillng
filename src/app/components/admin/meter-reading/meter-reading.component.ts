import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.css']
})
export class MeterReadingComponent implements OnInit {
  searchForm: FormGroup;
  meterReadingForm: FormGroup;
  billingZones: any[] = [];
  consumers: any[] = [];
  consumerData: any;
  isConsumerFound: boolean = false;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.searchForm = this.fb.group({
      billing_zone: ['', Validators.required],
      consumer_no: ['', Validators.required],
      previous_month_meter_reading: ['', Validators.required],
    });

    this.meterReadingForm = this.fb.group({
      consumer_no: ['', Validators.required],
      consumer_id: ['', Validators.required],
      
      month: ['', Validators.required],
      year: ['', Validators.required],
      current_month_meter_reading: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.apiService.getBillingZones().subscribe(data => {
      this.billingZones = data;
    });
  }

  onBillingZoneChange(): void {
    const zoneId = this.searchForm.get('billing_zone')?.value;
    console.log('Selected Zone ID:', zoneId); 
      this.apiService.getConsumersByZone(zoneId).subscribe({
        next: data => {
          console.log('Filtered Consumers:', data); 
          this.consumers = data;
        },
        error: error => {
          console.error('Error fetching consumers', error);
        },
        complete: () => {
          console.log('Consumer fetching complete');
        }
      });
    }
  

  

    onSearchSubmit(): void {
      if (this.searchForm.valid) {
        const consumerNo = this.searchForm.get('consumer_no')?.value;  

        console.log('Consumer Number:', consumerNo);  
    
        this.apiService.getPreviousWaterConsumption(consumerNo).subscribe(
          data => {
            console.log('API Response:', data); 
    
            if (data) {
              this.consumerData = data;
              this.isConsumerFound = true;
              this.meterReadingForm.patchValue({
                consumer_no: data.consumer_no,
                consumer_id: data.consumer_id,
                previous_month_meter_reading: data.prev_meter_reading
              });
            } else {
              this.isConsumerFound = false;
              console.error('No data found for the given consumer number.');
            }
          },
          error => {
            this.isConsumerFound = false;
            console.error('Error fetching data:', error);
          }
        );
      }
    }
    
  onMeterReadingSubmit(): void {
    if (this.meterReadingForm.valid) {
      this.apiService.processWaterConsumption(this.meterReadingForm.value).subscribe(() => {
        alert('Record inserted successfully.');
        this.isConsumerFound = false;
        this.searchForm.reset();
        this.meterReadingForm.reset();
      });
    }
  }
}
