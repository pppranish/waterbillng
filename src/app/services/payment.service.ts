import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'assets/data.json'; // Adjust the path based on your project structure

  constructor(private http: HttpClient) {}

  getPaymentCollectionSummaryPhe(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data) => {
        const payments = data.payment_received_details;
        const summary = {
          water: {
            bill: this.sumByPaymentType(payments, 'Water Supply', 'Water Bill'),
            cost_of_application_form: this.sumByPaymentType(payments, 'Water Supply', 'CAFNCS'),
            new_connection_fee: this.sumByPaymentType(payments, 'Water Supply', 'NCF'),
            shifting_charge: this.sumByPaymentType(payments, 'Water Supply', 'Advance Payment')
          },
          sewerage: {
            bill: this.sumByPaymentType(payments, 'Sewerage Connection', 'Sewerage Bill'),
            cost_of_application_form: this.sumByPaymentType(payments, 'Sewerage Connection', 'CAFNCS'),
            new_connection_fee: this.sumByPaymentType(payments, 'Sewerage Connection', 'NCF'),
            shifting_charge: this.sumByPaymentType(payments, 'Sewerage Connection', 'SCSPCP')
          }
        };
        return summary;
      })
    );
  }

  private sumByPaymentType(payments: any[], paymentReceivedFor: string, amountReceivedFor: string): number {
    return payments
      .filter(payment => payment.payment_received_for === paymentReceivedFor && payment.amount_received_for === amountReceivedFor)
      .reduce((sum, payment) => sum + payment.amount_received, 0);
  }
}
