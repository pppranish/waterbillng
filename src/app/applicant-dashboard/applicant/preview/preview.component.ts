import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {


  formData: FormGroup; // FormGroup to manage form data

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      // Initialize form controls here as per your form fields
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      aadharNo: '',
      voterId: '',
      contactNumber: '',
      email: '',
      fatherName: '',
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
      isBplCategory: '',
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
      tempConnectionDuration: '',
      quantityOfWater: '',
      noOfTaps: '',
      noOfRooms: '',
      noOfToilets: '',
      noOfUsers: '',
      buildingPlan: '',
      ownershipCertificate: '',
      passportPhoto: '',
      photoId: '',
      aadharCard: '',
      voterCard: '',
      bankReceiptNoForForm: '',
      bankReceiptAmountForForm: '',
      bankReceiptDateForForm: '',
      bankReceiptNoForConnection: '',
      bankReceiptAmountForConnection: '',
      bankReceiptDateForConnection: '',
      chamberPointReferenceNo: '',
      approvedConnectionId: '',
      approvedWardId: '',
      approvedZoneId: '',
      approvedSubZoneId: '',
      approvedConsumerNo: '',
      billingEffectiveFrom: ''
    });
  }

  ngOnInit(): void {
    // Example: Initialize form data from API or other sources
    this.initializeFormData();
  }

  initializeFormData(): void {
    // Simulated method to fetch or set form data
    // Replace with actual data fetching logic as per your application
    this.formData.patchValue({
      firstName: 'John',
      middleName: 'Doe',
      lastName: 'Smith',
      gender: 'male',
      aadharNo: '1234 5678 9101',
      voterId: 'ABC1234567',
      contactNumber: '+91 9876543210',
      email: 'john.doe@example.com',
      fatherName: 'Michael Doe',
      relativeName: 'Jane Doe',
      address: '123, Park Avenue, New York',
      tel: '+1 123-456-7890',
      pincode: '10001',
      houseName: 'Sunrise Apartments',
      flatNo: 'A1',
      houseNo: '123',
      streetName: 'Park Street',
      wardId: 'Ward 5',
      lgdName: 'Local Governance Body',
      city: 'New York',
      connectionPremisesPinCode: '10001',
      lgdType: 'Type A',
      ownership: 'Owned',
      isBplCategory: 'No',
      hasSewerageConnection: 'Yes',
      sewerageConnectionNumber: 'Sewer123',
      otherWaterConnection: 'No',
      otherWaterConnectionForm: '',
      waterRequiredFor: 'Residential',
      waterConsumerCategory: 'Category A',
      typeOfPremises: 'Apartment',
      premisesDetail: '2BHK',
      noOfStoreys: '3',
      connectionPeriod: 'Permanent',
      tempConnectionDuration: '',
      quantityOfWater: '200',
      noOfTaps: '4',
      noOfRooms: '2',
      noOfToilets: '1',
      noOfUsers: '3',
      buildingPlan: 'BuildingPlan.pdf',
      ownershipCertificate: 'OwnershipCertificate.pdf',
      passportPhoto: 'PassportPhoto.jpg',
      photoId: 'PhotoID.jpg',
      aadharCard: 'AadharCard.pdf',
      voterCard: 'VoterCard.jpg',
      bankReceiptNoForForm: 'BR1234',
      bankReceiptAmountForForm: '25',
      bankReceiptDateForForm: '2024-06-01',
      bankReceiptNoForConnection: 'BR5678',
      bankReceiptAmountForConnection: '600',
      bankReceiptDateForConnection: '2024-06-01',
      chamberPointReferenceNo: 'Chamber123',
      approvedConnectionId: 'Conn123',
      approvedWardId: 'Ward5',
      approvedZoneId: 'ZoneA',
      approvedSubZoneId: 'SubZone1',
      approvedConsumerNo: 'Consumer123',
      billingEffectiveFrom: '2024-07-01'
    });
  }

  // Function to handle form submission for Step 4
  submitStep4(): void {
    console.log('Step 4 Form Data:', this.formData.value);

    // Example: Submit formData to API or other processing logic
    // Replace with your actual form submission logic
  }

  // Function to navigate to previous step
  goToPreviousStep(): void {
    // Implement navigation logic to previous step
    console.log('Navigating to previous step');
  }

  // Function to skip to next step
  skipToNextStep(): void {
    // Implement logic to skip to next step
    console.log('Skipping to next step');
  }

}
