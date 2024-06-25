import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form related modules

@Component({
  selector: 'app-consumer-details',
  templateUrl: './consumer-details.component.html',
  styleUrls: ['./consumer-details.component.css']
})
export class ConsumerDetailsComponent {
  @Output() nextStep = new EventEmitter<void>();
  step1Form: FormGroup; // Declare FormGroup for reactive form

  existingConsumers = [
    { id: '1', name: 'Consumer 1' },
    { id: '2', name: 'Consumer 2' }
  ];

  private autoSaveInterval: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.step1Form = this.fb.group({
      tempConsumerIdStep1: [''],
      tempConsumerNoStep1: [''],
      consumerUserIdStep1: [''],
      consumerType: ['new'],
      consumerNo: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      aadharNo: [''],
      voterId: [''],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      relation: ['S/o', Validators.required],
      relativeName: ['', Validators.required],
      address: ['', Validators.required],
      tel: [''],
      pincode: [''],
      houseName: [''],
      flatNo: [''],
      houseNo: [''],
      streetName: [''],
      wardId: [''],
      lgdName: [''],
      city: [''],
      connectionPremisesPinCode: [''],
      lgdType: [''],
      ownership: [''],
      isBplCategory: ['']
    });

    const savedFormData = localStorage.getItem('step1FormData');
    if (savedFormData) {
      this.step1Form.patchValue(JSON.parse(savedFormData));
    }
    
    this.autoSaveInterval = setInterval(() => {
      this.saveFormData();
    }, 5 * 60 * 1000);
  }

  ngOnDestroy(): void {

    clearInterval(this.autoSaveInterval); // Clear auto-save interval on component destroy
    this.saveFormData();
  }
  next() {
    this.saveFormData(); 
    this.nextStep.emit();
  }

  submitStep1() {
    if (this.step1Form.valid) {
      console.log(this.step1Form.value); // Access form data via this.step1Form.value
      this.apiService.submitApplicantDetails(this.step1Form.value).subscribe({
        next: (response) => {
          console.log('Consumer details submitted successfully', response);
          this.next();
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error submitting consumer details', error);
        }
      });
    } else {
      console.log('Form is invalid');

      this.step1Form.markAllAsTouched();
    }
  }

  private saveFormData() {

    localStorage.setItem('step1FormData', JSON.stringify(this.step1Form.value));
  }
}
