import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  currentUser: any;

  constructor(private router: Router , private authService: AuthService) {  


  }
  

  ngOnInit(): void {
    // Retrieve the current user on component initialization
    this.currentUser = this.authService.currentUserValue;
  }



  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}