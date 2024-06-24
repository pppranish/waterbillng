import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:5002';

  constructor(private http: HttpClient) { }

  getBillingZones(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/db.json`).pipe(
      map(response => response.zones)
    );
  }

 
  getConsumersByZone(zoneId: number): Observable<any[]> {
    return this.http.get<any[]>( "  http://localhost:5002/consumers").pipe(
      map(response => {
        if (!Array.isArray(response)) {
          console.error('Response is not an array', response);
          throw new Error('Response is not an array');
        }
        console.log(response)
        console.log('Filtering consumers with zone_id:', zoneId);
        const filteredConsumers = response.filter(consumer => consumer.zone_id == zoneId);
        console.log('Filtered Consumers:', filteredConsumers);
        return filteredConsumers;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
   
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getPreviousWaterConsumption(consumerNo: string): Observable<any> {
    const url = `http://localhost:5002/prev-water-consumption?consumer_no=${consumerNo}`;
    console.log('Request URL:', url);  
    return this.http.get<any>(url);
  }

  processWaterConsumption(data: any): Observable<any> {
    return this.http.post('/api/meter/process-water-consumption', data);
  }


  generateBill(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/water_consumer_bills`, data);
  }

  updateWaterConsumptionDetails(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/water_consumption_details/${id}`, data);
  }

  getPendingBillFromMonthYear(): Observable<any> {
    const query = 'water_consumption_details?bill_no=null&_sort=year,month_no&_order=asc,asc&_limit=1';
    console.log(`${this.baseUrl}/${query}`); 
     return this.http.get<any[]>(`${this.baseUrl}/${query}`);

  }

  getPendingBillToMonthYear(): Observable<any> {
    const query = 'water_consumption_details?bill_no=null&_sort=year,month_no&_order=desc,desc&_limit=1';
    return this.http.get<any[]>(`${this.baseUrl}/${query}`);
  }
}

