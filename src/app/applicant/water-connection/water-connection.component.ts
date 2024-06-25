import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-water-connection',
  templateUrl: './water-connection.component.html',
  styleUrls: ['./water-connection.component.css']
})
export class WaterConnectionComponent {

  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  formData: any = {
    hasSewerageConnection: '',
    sewerageConnectionNumber: '',
    otherWaterConnection: '',
    otherWaterConnectionForm: '',
    waterRequiredFor: '',
    waterConsumerCategory: '',
    typeOfPremises: '',
    premisesDetail: '',
    noOfStoreys: '',
    connectionPeriod: '',
    tempConnectionDuration: null,
    quantityOfWater: '',
    noOfTaps: '',
    noOfRooms: '',
    noOfToilets: '',
    noOfUsers: ''
  };

  ngOnInit(): void {
 
  }

  next() {
    this.nextStep.emit();
  }

  previous() {
    this.previousStep.emit();
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      // Perform POST request
      this.http.post<any>('  http://localhost:5002/water-connection-details', this.formData)
        .subscribe(
          (response) => {
            console.log('POST request successful:', response);
            // Optionally, perform any additional actions upon successful submission
          },
          (error) => {
            console.error('Error in POST request:', error);
            // Handle error scenarios if needed
          }
        );
    } else {
      console.log('Form is invalid!');
      // Mark all fields as touched to display validation errors in the UI
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }


}
