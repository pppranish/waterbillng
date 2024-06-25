import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.css']
})
export class ApplicantDashboardComponent {

  currentUser: any;
  

  @ViewChild('applyDropdown') applyDropdown!: ElementRef;
  constructor(private router: Router , private authService: AuthService) { 
    
  }
  ngOnInit(): void {
    this.currentUser = this.authService.currentUserValue;
  }

  toggleDropdown() {
    this.applyDropdown.nativeElement.classList.toggle('menu-open');
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);

    
  }


}
