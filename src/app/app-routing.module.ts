import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { DasboardComponent } from './components/admin/dasboard/dasboard.component';
import { WaterBillComponent } from './components/admin/water-bill/water-bill.component';
import { ConnectionComponent } from './components/admin/connection/connection.component';
import { SewageBillComponent } from './components/admin/sewage-bill/sewage-bill.component';
import { PaymentHistoryComponent } from './components/admin/payment-history/payment-history.component';
import { MessageInboxComponent } from './components/admin/message-inbox/message-inbox.component';
import { ErrorLogsComponent } from './components/admin/error-logs/error-logs.component';
import { UserManagmentComponent } from './components/admin/user-managment/user-managment.component';
import { ConsumptionComponent } from './components/admin/consumption/consumption.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'admin' , component: AdminComponent, children:[
    {path: 'dashboard', component: DasboardComponent},
    { path: 'connection', component: ConnectionComponent },
    {path:'consumption' , component: ConsumptionComponent},
    { path: 'water-bill', component: WaterBillComponent },
    { path: 'sewage-bill', component: SewageBillComponent },
    { path: 'payment-history', component: PaymentHistoryComponent },
    { path: 'message-inbox', component: MessageInboxComponent },
    { path: 'user-management', component: UserManagmentComponent},
    { path: 'error-logs', component: ErrorLogsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  ]},
  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
