import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  clicked = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required]
    });
  }

  onClickBeforeSubmit() {
    this.clicked = true;
  }

  signUp() {
    if (this.signupForm.valid) {
      const { name, email, mobilenumber, password, role } = this.signupForm.value;
      this.authService.signup(name, email, mobilenumber, password, role).subscribe((response : any ) => {
        if (response.success) {
          console.log('Signup successful:', response);
          // Handle successful signup, e.g., navigate to login page or dashboard
        } else {
          console.log('Signup failed:', response.message);
          // Handle signup failure, e.g., show error message
        }
      });
    }
  }
}
