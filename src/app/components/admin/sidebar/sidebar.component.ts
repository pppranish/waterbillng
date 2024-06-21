import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import {
  faTachometerAlt, // Dashboard
  faFaucet, // Water Connection
  faTint, // Consumption
  faFileInvoiceDollar, // Water Bill
  faFileInvoice, // Sewerage Bill
  faHistory, // Payment History
  faEnvelope, // Message Inbox
  faUserCog, // User Management
  faExclamationTriangle // Error Logs
} from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  fadashboard =   faTachometerAlt
  fawaterconnection =  faFaucet
  faconsumption =   faTint
  fawatervill  =    faFileInvoiceDollar
  fasewaragebill =   faFileInvoice
  fapaymenthistory = faHistory
  famessageinbox = faEnvelope
  fausermanagement =   faUserCog
  faerrorlogs =   faExclamationTriangle


  userName: string = '';
  canAccessWater: boolean = true;
  canAccessSewerage: boolean = true;
  isSuperAdmin: boolean = true ;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.canAccessWater = this.authService.hasPermission('can-access-water');
    this.canAccessSewerage = this.authService.hasPermission('can-access-sewerage');
    this.isSuperAdmin = this.authService.isSuperAdmin();
  }


}
