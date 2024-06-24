// print-bill.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// Import your data service

@Component({
  selector: 'app-print-bill',
  templateUrl: './print-bill.component.html',
  styleUrls: ['./print-bill.component.css']
})
export class PrintBillComponent implements OnInit {

  formData: any = {
    billing_zone: '',
    water_meter_installed: '0', // Default to Tap-based
    consumer_no: '',
    sl_no: ''
  };

  billingZones: any[] = [];
  consumers : any[] = []; // Assuming billing zones are fetched from a service

  constructor(private router: Router, private dataService: ApiService) { }

  ngOnInit() {
    this.dataService.getBillingZones().subscribe(data => {
      this.billingZones = data;
    });
  } 
  

  onBillingZoneChange(): void {
    const zoneId = this.formData.billing_zone;
    console.log('Selected Zone ID:', zoneId); 
      this.dataService.getConsumersByZone(zoneId).subscribe({
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





  onSubmit() {
    // Perform form submission logic if needed (e.g., preview)
    // You can navigate or perform other actions based on form data
    this.router.navigate(['/preview']); // Example navigation
  }

  printBill() {
    // Perform printing logic based on form data
    // Example call to service method for printing
    this.dataService.payBill(this.formData).subscribe(
      (response: any) => {
        console.log('Printing response:', response);
        // Handle success, e.g., show success message
      },
      (error : any) => {
        console.error('Error printing bill:', error);
        // Handle error, e.g., show error message
      }
    );
  }

}
