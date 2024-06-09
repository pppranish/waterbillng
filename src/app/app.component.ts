import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DasboardComponent } from './components/admin/dasboard/dasboard.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  shouldShowHeader: boolean = true;
  shouldShowNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateHeaderAndNavbarVisibility(event.url);
      }
    });
  }

  private updateHeaderAndNavbarVisibility(url: string): void {
    const excludedRoutes = ['login', 'signup' , 'admin' , 'dashboard', 'connection' , 'consumption', 'water-bill', 'sewage-bill' , 'payment-history', 'message-inbox' , 'user-management' , 'error-logs' ];

  
    if (excludedRoutes.some(route => url.endsWith(route))) {
      this.shouldShowHeader = false;
      this.shouldShowNavbar = false;
    } else {
      this.shouldShowHeader = true;
      this.shouldShowNavbar = true;
    }
  }
}
