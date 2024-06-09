import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit{
  connectionForm: FormGroup;
  constructor(private fb: FormBuilder) {  
    this.connectionForm = this.fb.group({
      name: [''],
      email: [''],
      address: [''],
      price: [{ value: '1000', disabled: true }]
    });
  }
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.connectionForm.value);
  }
}
