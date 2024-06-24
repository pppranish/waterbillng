

import { Component, OnInit } from '@angular/core';
import { WorkflowUsersService } from 'src/app/services/workflow-user.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'; 

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  userForm!: FormGroup;
  errorMessage!: string;

  user: any = {
    salutation: '',
    gender: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    designation: '',
    division: '',
    email: '',
    contact_number: '',
    password: '',
    password_confirmation: '',
    selectedRoles: {},          
    selectedPermissions: {},   
    selectedWorkflows: {}      
  };
  designations: any[] = []; 
  divisions: any[] = [];
  roles: string[] = [];
  permissions: any[] = []; 
  workflows: any[] = []; 

  constructor(
    private formBuilder: FormBuilder, 
    private workflowUsersService: WorkflowUsersService
  ) { }

  ngOnInit(): void {
    this.initForm();

    // Sample data for designations, divisions, roles, permissions, and workflows
    this.designations = [
      { id: 1, name: 'Manager' },
      { id: 2, name: 'Supervisor' },
      { id: 3, name: 'Developer' }
    ];
    this.divisions = [
      { id: 1, name: 'IT' },
      { id: 2, name: 'HR' },
      { id: 3, name: 'Operations' }
    ];
    this.roles = [
      "w-co", "w-cc-desk1", "w-cc-desk2", "w-ae-mtc", "w-de-rev", 
      "w-ae-rev", "w-ldc-rev", "s-co", "s-cc-desk1", "s-cc-desk2", 
      "s-ae-mtc", "s-de-rev", "s-ae-rev", "s-ldc-rev", "w-ari-rev", 
      "w-je-rev", "s-je-rev"
    ];
    this.permissions = [
      { id: 1, name: 'Create' },
      { id: 2, name: 'Read' },
      { id: 3, name: 'Update' },
      { id: 4, name: 'Delete' }
    ];
    this.workflows = [
      { id: 1, step: 'Step 1' },
      { id: 2, step: 'Step 2' },
      { id: 3, step: 'Step 3' }
    ];
  }

  initForm(): void {
    this.userForm = this.formBuilder.group({
      salutation: ['', Validators.required],
      gender: ['', Validators.required],
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      designation: ['', Validators.required],
      division: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact_number: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', Validators.required],
      roles: [[], Validators.required],
      permissions: [[], Validators.required],
      workflows: [[], Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup): null | { passwordMismatch: boolean } {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('password_confirmation')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  saveUser() {
    if (this.userForm.invalid) {
      this.workflowUsersService.createUser(this.userForm.value).subscribe({
        next: (response) => {
          console.log('User created successfully', response);
        
        },
        error: (error) => {
          console.error('Error creating user', error);
      
          this.errorMessage = 'Failed to create user: ' + (error.message || error.statusText || 'Unknown error');
        }
      });
      return;
    }

  }
  
  }

