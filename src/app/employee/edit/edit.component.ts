import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employeesr/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editLoginForm: any;
  editData: any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private services: EmployeeService) {
    this.editLoginForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      dateofBirth: [null, Validators.required],
      phoneNumber: ['', [Validators.required]]

    })
  }

  ngOnInit(): void {
    this.editData = JSON.parse(localStorage.getItem('usersdata') || " ")
    console.log(this.editData);
    this.editLoginForm.patchValue({
      id: this.editData.id,
      name: this.editData.name,
      dateofBirth: this.editData.dateofBirth,
      phoneNumber: this.editData.phoneNumber

    })

  }

  get f() {
    return this.editLoginForm.controls;
  }

  getdata() {
    this.router.navigate(['/employee']);
    this.services.update(this.editLoginForm.value)

  }
  cancel() {

  }

}
