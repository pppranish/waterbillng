import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent {
  @Output() nextStep = new EventEmitter<void>();

  formData: any = {
    tempConsumerIdStep1: '',
    tempConsumerNoStep1: '',
    consumerUserIdStep1: '',
    consumerType: 'new',
    consumerNo: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    aadharNo: '',
    voterId: '',
    contactNumber: '',
    email: '',
    relation: 'S/o',
    relativeName: '',
    address: '',
    tel: '',
    pincode: '',
    houseName: '',
    flatNo: '',
    houseNo: '',
    streetName: '',
    wardId: '',
    lgdName: '',
    city: '',
    connectionPremisesPinCode: '',
    lgdType: '',
    ownership: '',
    isBplCategory: ''
  };

  existingConsumers = [
    { id: '1', name: 'Consumer 1' },
    { id: '2', name: 'Consumer 2' }
  ];


  next() {
    this.nextStep.emit();
  }

  submitStep1() {
    console.log(this.formData);
    // Add your form submission logic here
  }
}
