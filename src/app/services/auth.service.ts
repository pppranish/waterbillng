import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  


  constructor(private http: HttpClient , private router: Router) {
    // Initialize the currentUserSubject with the value from localStorage or null

    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
     
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          if(user.role === 'Admin'){
            this.router.navigate(['/admin']); 
          }
          if(user.role === 'Consumer'){
            this.router.navigate(['/consumer']); 
          }
          if(user.role === 'Applicant'){
            this.router.navigate(['/Applicant']); 
          }
          return { success: true, username: user.name,  role: user.role };
        } else {
          return { success: false, message: 'Invalid credentials' };
        }
      })
    );
  }


  signup(name: string, email: string, mobilenumber: string, password: string, role: string): Observable<any> {
    const newUser = { name, email, mobilenumber, password, role };

    // Check for duplicate email
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const userExists = users.some(u => u.email === email);
        if (userExists) {
          throw new Error('Email already exists');
        }
        return newUser;
      }),
      switchMap(user => this.http.post<any>(this.apiUrl, user)),
      map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return { success: true, username: user.name, role: user.role };
        } else {
          return { success: false, message: 'Signup failed' };
        }
      })
    );
  }

  logout() {
  
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }




  getUserName(): string {
    // Replace with actual implementation to fetch user name
    return 'John Doe';
  }

  hasPermission(permission: string): boolean {
    // Replace with actual implementation to check user permissions
    const permissions = ['can-access-water', 'can-access-sewerage'];
    return permissions.includes(permission);
  }

  isSuperAdmin(): boolean {
    
    return true;
  }



}
