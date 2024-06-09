import { Component } from '@angular/core';


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


}
