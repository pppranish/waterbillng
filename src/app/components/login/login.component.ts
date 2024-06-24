import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  clicked = false;
  isLoggedIn = false;
  username: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService , private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }
   currentUser = this.authService.currentUserValue; 

  onClickBeforeSubmit() {
    this.clicked = true;
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe((response :any )  => {
        if (response.success) {
          this.isLoggedIn = true;
          this.username = response.username;
          console.log('Login successful:', response);
<<<<<<< HEAD
         if(this.currentUser.role === 'Admin'){
          this.router.navigate(['/admin']);
         }
         else if(this.currentUser.role === 'Applicant'){
          this.router.navigate(['/applicant']);
         }
         else if(this.currentUser.role === 'Consumer'){
          this.router.navigate(['/consumer']);
         }
=======
          if(response.role=='Admin')
            this.router.navigate(['/admin']);
          if(response.role=='Applicant')
              this.router.navigate(['/applicant']);
>>>>>>> 4ff5793e30aa11f7eab91881b9e2e527fb808c28
        } else {
          this.isLoggedIn = false;
          console.error('Login failed:', response.message);
        }
      }, (error :any ) => {
        this.isLoggedIn = false;
        console.error('Login error:', error);
      });
    }
  }
}