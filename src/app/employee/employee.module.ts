import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { GrtleavesComponent } from './grtleaves/grtleaves.component';
import { LeavedetailComponent } from './leavedetail/leavedetail.component';
import { GetsolutionComponent } from './getsolution/getsolution.component';
import { SolutindetailComponent } from './solutindetail/solutindetail.component';


@NgModule({
  declarations: [
    MainComponent,
    GrtleavesComponent,
    LeavedetailComponent,
    GetsolutionComponent,
    SolutindetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
