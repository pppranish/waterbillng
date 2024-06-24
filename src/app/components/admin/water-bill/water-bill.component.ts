import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



interface MonthYear {
  id: number;
  consumer_id: number;
  consumer_no: string;
  month_no: number;
  month_name: string;
  year: number;
  current_rate_of_charge?: number;
  current_month_meter_reading?: number;
}

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.css']
})export class WaterBillComponent implements OnInit {
  fromMonthYear: MonthYear | null = null;
  toMonthYear: MonthYear | null = null;
  pendingBills: any[] = [];

  constructor(private waterBillService: ApiService) {}

  ngOnInit(): void {
    this.loadPendingBillFromMonthYear();
  }

 
  loadPendingBillFromMonthYear(): void {
    this.waterBillService.getPendingBillFromMonthYear()
      .subscribe(
        (data: any[]) => {
          this.pendingBills = data.map(item => ({
            id: item.id,
            consumer_id: item.consumer_id,
            consumer_no: item.consumer_no,
            month_no: item.month_no,
            month_name: item.month_name,
            year: item.year,
            current_rate_of_charge: item.current_rate_of_charge,
            current_month_meter_reading: item.current_month_meter_reading
          }));
          if (data.length > 0) {
            this.fromMonthYear = data[0];
            this.toMonthYear = data[0];
          }
          console.log('Pending Bills:', this.pendingBills);
        },
        error => {
          console.error('Error loading pending bills:', error);
        }
      );
  }

  generateBill(): void {
    if (!this.fromMonthYear || !this.toMonthYear) {
      console.error('fromMonthYear or toMonthYear is null');
      return;
    }

    const currentMonthCharge = (this.fromMonthYear.current_rate_of_charge ?? 0) * (this.fromMonthYear.current_month_meter_reading ?? 0);
    const waterMeterCharge = (this.toMonthYear.current_month_meter_reading ?? 0) - 10;

    const data = {
      consumer_id: this.fromMonthYear.consumer_id,
      consumer_no: this.fromMonthYear.consumer_no,
      billing_from_month_no: this.fromMonthYear.month_no,
      billing_to_month_no: this.toMonthYear.month_no,
      billing_from_month_name: this.fromMonthYear.month_name,
      billing_to_month_name: this.toMonthYear.month_name,
      billing_for_month_count: 1,
      billing_year: this.fromMonthYear.year,
      arrears: 0,
      current_month_charge: currentMonthCharge,
      water_meter_charge: waterMeterCharge,
      payment_status: true,
      created_by: 'Admin',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      from_date: `${this.fromMonthYear.year}-${String(this.fromMonthYear.month_no).padStart(2, '0')}-01`,
      to_date: `${this.toMonthYear.year}-${String(this.toMonthYear.month_no).padStart(2, '0')}-01`
    };

    console.log('Generated bill data:', data);

    this.waterBillService.generateBillsTapBased(data).subscribe(
      response => {
        console.log('Bill generated successfully:', response);
        // Handle success response here, maybe update the UI or reset form
      },
      error => {
        console.error('Error generating bill:', error);
        // Handle error response here
      }
    );
  }
}
