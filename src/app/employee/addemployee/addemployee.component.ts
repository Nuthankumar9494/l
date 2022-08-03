import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { EmployeeService } from 'src/app/employeesr/employee.service';
import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  title = 'Angular Reactive Forms';
  loginForm: any;
  error: any;



  constructor(private router: Router,
    private employeeService: EmployeeService,
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required]]
    })


  }
  get f() {
    return this.loginForm.controls;

  }

  ngOnInit(): void {


  }
  cancel() {
    this.router.navigate(['/employee']);
  }
  getdata() {
    if (this.loginForm.invalid) {
      // this.error="All fields are requred"
      this.loginForm.markAllAsTouched();
    } else {
      this.error = " "
      this.employeeService.create(this.loginForm.value);
      this.router.navigate(['/employee'])
    }
  }


}
