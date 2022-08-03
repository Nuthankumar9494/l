import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Employee } from '../employee/addemployee/models/department-model';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeesevice: Employee[] = [{
    id:0,
    name:'Nuthan',
    dateofBirth:"24-2-2000",
    phoneNumber:90999000

  },
  {
    id:1,
    name:'Prahasith',
    dateofBirth:"21-06-1995",
    phoneNumber:90999000
  }];

  create(employeesevice: Employee) {
    const item = this.employeesevice.length;
    employeesevice.id = this.getnextId();
    console.log(employeesevice);
    this.employeesevice[item] = employeesevice;
  }
   getnextId():number{
    let highest =0;
    this.employeesevice.forEach(function(item){
      if (highest ===0){
        highest=item.id;
      }
      if(highest < item.id){
        highest=item.id; 0
      }
    });
    return highest + 1;
  



    
   }
   getAll(){
    return this.employeesevice
   }
  //  update(usercontact: UserContact) {
  //   const itemIndex = this.usercontacts.findIndex(item => item.id === usercontact.id);
  //   console.log(itemIndex);
  //   this.usercontacts[itemIndex] = usercontact;
  // }
   update(userContact:Employee){
     const itemIndex= this.employeesevice.findIndex(item =>item.id === userContact.id);
     this.employeesevice[itemIndex]=userContact;
    
   }
   deleteUser(employeeService:Employee){
    this.employeesevice.splice(this.employeesevice.indexOf(employeeService))
   }

  constructor( ) { 
    

  }
}
