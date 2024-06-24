import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.css']
})
export class WaterBillComponent implements OnInit {
  fromMonthYear: any;
  toMonthYear: any;

  constructor(private waterBillService: ApiService) { }

  ngOnInit(): void {
    this.waterBillService.getPendingBillFromMonthYear().subscribe(data => {
      console.log(data)
      this.fromMonthYear = "january";

    });

    this.waterBillService.getPendingBillToMonthYear().subscribe(data => {
      this.toMonthYear = "decemeber";
    });
  }

  generateBill(): void {
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
      current_month_charge: (this.fromMonthYear.current_rate_of_charge * this.fromMonthYear.current_month_meter_reading),
      water_meter_charge: (this.toMonthYear.current_month_meter_reading - 10),
      payment_status: true, 
      created_by: 'Admin', 
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      from_date: `${this.fromMonthYear.year}-${this.fromMonthYear.month_no}-01`,
      to_date: `${this.toMonthYear.year}-${this.toMonthYear.month_no}-01`
    };

    this.waterBillService.generateBill(data).subscribe(
      response => {
        console.log('Bill generated successfully:', response);
        // Optionally, update the bill_no in water_consumption_details
        this.updateWaterConsumptionDetails();
      },
      error => {
        console.error('Error generating bill:', error);
      }
    );
  }

  updateWaterConsumptionDetails(): void {
    const fromDate = `${this.fromMonthYear.year}-${this.fromMonthYear.month_no}-01`;
    const toDate = `${this.toMonthYear.year}-${this.toMonthYear.month_no}-01`;
    this.waterBillService.updateWaterConsumptionDetails(this.fromMonthYear.id, { bill_no: `${this.fromMonthYear.consumer_no}/${this.fromMonthYear.month_no}-${this.toMonthYear.month_no}/${this.fromMonthYear.year}` })
      .subscribe(
        response => {
          console.log('Water consumption details updated successfully:', response);

          this.fromMonthYear = null;
          this.toMonthYear = null;
        },
        error => {
          console.error('Error updating water consumption details:', error);
        }
      );
  }
}

