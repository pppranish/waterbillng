import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-uploads',
  templateUrl: './file-uploads.component.html',
  styleUrls: ['./file-uploads.component.css']
})
export class FileUploadsComponent implements OnInit {
  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();
 
  formData!: FormGroup; // Add '!' to indicate formData will be initialized

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      temp_consumer_id_step3: [''],
      temp_consumer_no_step3: [''],
      consumer_user_id_step3: [''],
      building_plan: [null],
      ownership_certificate: [null],
      pass_photo: [null],
      photo_id: [null],
      aadhar_card: [null],
      voter_card: [null],
      premises_photo: [null],
      bank_receipt_no_for_form: [''],
      bank_receipt_amount_for_form: ['25'], // Assuming default value for form fee
      bank_receipt_date_for_form: [''],
      bank_receipt_no_for_connection: [''],
      bank_receipt_amount_for_connection: ['600'], // Assuming default value for connection fee
      bank_receipt_date_for_connection: [''],
      chamber_point_reference_no: [''],
      approved_connection_id: [''],
      approved_ward_id: [''],
      approved_zone_id: [''],
      billing_effective_form: ['']
    });
  }

  handleFileInput(event: any, controlName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formData.patchValue({
        [controlName]: file
      });
    }
  }

  previous() {
    this.previousStep.emit();
  }

  next() {
    this.nextStep.emit();
  }

  onSubmit(): void {
    if (this.formData.valid) { // Ensure formData is valid
      const formValues = this.formData.value;
      const formData = new FormData();
      
      Object.keys(formValues).forEach(key => {
        const value = formValues[key];
        if (value instanceof File) {
          formData.append(key, value, value.name); // Append files
        } else {
          formData.append(key, value); // Append other form values
        }
      });

      this.http.post<any>('http://localhost:5002/file-uploads', formData).subscribe(
        response => {
          console.log('File upload successful:', response);
          // Handle success scenario
        },
        error => {
          console.error('File upload error:', error);
          // Handle error scenario
        }
      );
    }
  }
}
