import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'; // Import your authentication service
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authService.currentUserValue; 

    console.log('Current User:', currentUser);
    if (currentUser && currentUser.role === 'Admin') { 
      return true;
    }
    if (currentUser && currentUser.role === 'Consumer') { 
      return true;
    }
    if (currentUser && currentUser.role === 'Applicant') { 
<<<<<<< HEAD
      return true;
=======
      return true; 
>>>>>>> 4ff5793e30aa11f7eab91881b9e2e527fb808c28
    }

   
    return this.router.navigate(['/login']);
  }
}
