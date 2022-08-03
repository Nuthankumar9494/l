import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employeesr/employee.service'; 
import { Employee } from '../addemployee/models/department-model';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})

export class DataComponent implements OnInit {

  constructor(private router:Router,
    private employeeservice:EmployeeService){
  }
  values:any;
  data:any;

  ngOnInit(): void {
    
    this.getdata();
    
  }
  users:any

  getdata(){
    this.data=this.employeeservice.getAll();
  }
  
  addata(){
    this.router.navigate(['/employee/addemployee']);
  }
  deleteuser(employeesevice: Employee){
    this.employeeservice.deleteUser(employeesevice)
  }
  edit(value:any){
    console.log(value);
    
    localStorage.setItem('usersdata',JSON.stringify(value));
    this.router.navigate(['/employee/edit'])
  
    }
   
  }
