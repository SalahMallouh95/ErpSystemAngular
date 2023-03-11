import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { AllEmpLeavesComponent } from './all-emp-leaves/all-emp-leaves.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


@NgModule({
  declarations: [
    MainComponent,
    AllEmpLeavesComponent,
    LeaveDetailsComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    SharedModule
  ]
})
export class HrModule { }
