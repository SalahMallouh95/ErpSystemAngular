import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { AllEmpLeavesComponent } from './all-emp-leaves/all-emp-leaves.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';


@NgModule({
  declarations: [
    MainComponent,
    AllEmpLeavesComponent,
    LeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    SharedModule
  ]
})
export class HrModule { }
