import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkflowUsersService {

  private apiUrl = 'http://localhost:3001/workflow-users';

  constructor(private http: HttpClient) { }

  getAllWorkflowUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  editWorkflowUser(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/edit`, { id });
  }

  deleteWorkflowUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
 

  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error.message || error.message);
    return throwError(error);
  }
}
