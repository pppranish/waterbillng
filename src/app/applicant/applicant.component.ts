import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { faUserPen,faFaucet, faFileArrowUp,faStamp } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { ConsumerDetailsComponent } from './consumer-details/consumer-details.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {


  ngOnInit(): void {
    // Initialize form data or fetch initial values if needed
  }


  currentStep = 1;

  goToStep(step: number) {
    this.currentStep = step;
  }

  onNextStep(event: any) {
    this.currentStep++;
  }

  onPreviousStep(event: any) {
    this.currentStep--;
  }
  faUserPen=faUserPen;
  faFaucet=faFaucet;
  faFileArrowUp=faFileArrowUp;
  faStamp=faStamp;

}
