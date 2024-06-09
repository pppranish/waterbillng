import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent {

  connections: any[] = []; // Array to hold water supply connections

  constructor() { }

  ngOnInit(): void {
    // Fetch water supply connections (Sample data for demonstration)
    this.connections = [
      { sNo: '01', name: 'Mr. Pranish Pradhan', payDate: '01-01-2021', amount: '1000', type:'Water' },
      { sNo: '02', name: 'Mr. Pranish Pradhan', payDate: '01-02-2021', amount: '1000', type:'Water' },
      { sNo: '03', name: 'Mr. Pranish Pradhan', payDate: '15-02-2021', amount: '2000', type:'Sewage' },
      { sNo: '04', name: 'Mr. Pranish Pradhan', payDate: '01-03-2021', amount: '1000', type:'Water' },
      { sNo: '05', name: 'Mr. Pranish Pradhan', payDate: '01-04-2021', amount: '1000', type:'Water' },
      
      // Add more connections as needed
    ];
  }
  get connectionCount(): number {
    return this.connections.length;
  }

}
