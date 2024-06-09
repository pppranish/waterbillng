import { Component } from '@angular/core';

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.css']
})
export class WaterBillComponent {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = [2020, 2021, 2022, 2023, 2024];
  selectedStartMonth: string = '';
  selectedStartYear: number = 0;
  selectedEndMonth: string = '';
  selectedEndYear: number = 0;

  // New fields for Print Water Bill
  zones = ['North', 'South', 'East', 'West'];
  evaluationTypes = ['Monthly', 'Quarterly', 'Yearly'];
  selectedZone: string = '';
  selectedEvaluationType: string ='';
  consumerNo: string ='';
  selectedStartMonthBill: string  ='';
  selectedStartYearBill: number =0 ;
  selectedEndMonthBill: string = '';
  selectedEndYearBill: number = 0;

  printBill() {
    const printSection = document.getElementById('print-section');
    if (printSection) {
      const printContents = printSection.innerHTML;
      const originalContents = document.body.innerHTML;
  
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
  
      // Reapply Angular bindings after modifying the DOM
      window.location.reload();
    }
  }

  
}
