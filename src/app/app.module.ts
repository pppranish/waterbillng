import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';

import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { MainComponent } from './components/admin/main/main.component';

import { HeadComponent } from './components/admin/head/head.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DasboardComponent } from './components/admin/dasboard/dasboard.component';
import { ConnectionComponent } from './components/admin/connection/connection.component';
import { WaterBillComponent } from './components/admin/water-bill/water-bill.component';
import { SewageBillComponent } from './components/admin/sewage-bill/sewage-bill.component';
import { PaymentHistoryComponent } from './components/admin/payment-history/payment-history.component';
import { MessageInboxComponent } from './components/admin/message-inbox/message-inbox.component';
import { UserManagmentComponent } from './components/admin/user-managment/user-managment.component';
import { ErrorLogsComponent } from './components/admin/error-logs/error-logs.component';
import { AuthService } from './services/auth.service';
import { ConsumptionComponent } from './components/admin/consumption/consumption.component';

import { FeatureModule } from './feature/feature.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
   
    ContactComponent,
        FooterComponent,
        DashboardComponent,
        LoginComponent,
        SignupComponent,
        AdminComponent,
        MainComponent,
        SidebarComponent,
        HeadComponent,
        DasboardComponent,
        ConnectionComponent,
        WaterBillComponent,
        SewageBillComponent,
        PaymentHistoryComponent,
        MessageInboxComponent,
        UserManagmentComponent,
        ErrorLogsComponent,
        ConsumptionComponent,
      
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FeatureModule,
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
