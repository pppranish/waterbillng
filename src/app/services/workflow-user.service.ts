import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkflowUsersService {

  private apiUrl = 'http://your-api-url/api/workflow-users';

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
  saveUser(user: any) {
    return this.http.post<any>(`${this.apiUrl}/create`, user);
  }
}
