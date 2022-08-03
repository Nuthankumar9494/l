import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DataComponent } from './data/data.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:DataComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
