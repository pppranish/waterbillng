import { Component } from '@angular/core';

@Component({
  selector: 'app-app-dash',
  templateUrl: './app-dash.component.html',
  styleUrls: ['./app-dash.component.css']
})
export class AppDashComponent {
  waterTotalConnection: number = 20;
  waterOutstandingBillAmount: number = 30;
  sewerageTotalConnection: number = 100;
  sewerageOutstandingBillAmount: number = 110;

}
