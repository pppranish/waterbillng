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
      return true; 
    }

   
    return this.router.navigate(['/login']);
  }
}
