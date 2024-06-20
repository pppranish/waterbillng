import { Component  , Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-file-uploads',
  templateUrl: './file-uploads.component.html',
  styleUrls: ['./file-uploads.component.css']
})
export class FileUploadsComponent {
  @Output() nextStep = new EventEmitter<void>();
  @Output() previousStep = new EventEmitter<void>();
 
  formData!: FormGroup; // Add '!' to indicate formData will be initialized

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      temp_consumer_id_step3: [''],
      temp_consumer_no_step3: [''],
      consumer_user_id_step3: [''],
      buliding_plan: [''],
      ownersip_certificate: [''],
      pass_photo: [''],
      photo_id: [''],
      aadhar_card: [''],
      voter_card: [''],
      premises_photo: [''],
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
  previous() {
    this.nextStep.emit();
  }

  next() {
    this.previousStep.emit();
  }

  onSubmit(): void {
    if (this.formData) { // Ensure formData is not null
      const formData = new FormData();
      Object.keys(this.formData.value).forEach(key => {
        const value = this.formData.get(key)?.value;
        if (value) {
          formData.append(key, value);
        }
      });

      this.http.post<any>('your-api-endpoint', formData).subscribe(
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
