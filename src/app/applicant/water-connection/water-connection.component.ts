import { Component , Output , EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-water-connection',
  templateUrl: './water-connection.component.html',
  styleUrls: ['./water-connection.component.css']
})
export class WaterConnectionComponent {

  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();

  next() {
    this.nextStep.emit();
  }
  
  previous() {
    this.previousStep.emit();
  }

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

  constructor() { }

  ngOnInit(): void {
    // Initialize form data or fetch initial values if needed
  }
 

  submitForm(form: NgForm): void {
    if (form.valid) {
      // Perform HTTP request or submit data to backend
      console.log('Form submitted!', this.formData);
      // Example of how you might submit data using Angular HttpClient:
      // this.http.post<any>('your-api-endpoint', this.formData).subscribe(response => {
      //   console.log('Response:', response);
      //   // Handle success or redirect as needed
      // }, error => {
      //   console.error('Error:', error);
      //   // Handle error scenario
      // });
    } else {
      // Handle form validation errors or display messages
      console.log('Form is invalid!');
      // You might also mark fields as touched to trigger validation messages
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }

}
