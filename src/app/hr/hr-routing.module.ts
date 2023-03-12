import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpLeavesComponent } from './all-emp-leaves/all-emp-leaves.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LeaveTypesCreateComponent } from './leave-types-create/leave-types-create.component';
import { LeaveTypesEditComponent } from './leave-types-edit/leave-types-edit.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:"AllLeaves",
    component:AllEmpLeavesComponent
  },
  {
    path:"LeaveDetails/:id",
    component:LeaveDetailsComponent
  },
  {
    path:"EmpList",
    component:EmployeeListComponent
  },
  {
    path:"EmpDetails/:id",
    component:EmployeeDetailsComponent
  },
  {
    path:"leaveType",
    component:LeaveTypesComponent

  },
  {
    path:"leaveTypeCreate",
    component:LeaveTypesCreateComponent
  },
  {
    path:"leaveTypeEdit",
    component:LeaveTypesEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class HrRoutingModule { }
