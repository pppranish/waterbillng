import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  cards = [
    {
      iconClass: 'fa fa-id-card',
      title: 'Total Applications Received',
      totalTillDate: '4.88 Cr',
      currentYear: '23 Lakh',
    },
    {
      iconClass: 'fa fa-check-square',
      title: 'Total Applications Registered',
      totalTillDate: '2.23 Cr',
      currentYear: '1.3 Lakh',
    },
    {
      iconClass: 'fas fa-rupee-sign',
      title: 'Total Revenue Generated',
      totalTillDate: '2,234.40 Cr',
      currentYear: '9,478.75 Cr',
    },
  ];

}
