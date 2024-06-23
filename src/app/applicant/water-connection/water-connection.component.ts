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
     
      console.log('Form submitted!', this.formData);
    } else {
    
      console.log('Form is invalid!');

      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
    }
  }

}
