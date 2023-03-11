import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { MAllEmpLeavesComponent } from './m-all-emp-leaves/m-all-emp-leaves.component';
import { MLeavesComponent } from './m-leaves/m-leaves.component';
import { MLeaveDetailsComponent } from './m-leave-details/m-leave-details.component';



@NgModule({
  declarations: [
    
  
    MainComponent,
              AllEmployeesComponent,
              MAllEmpLeavesComponent,
              MLeavesComponent,
              MLeaveDetailsComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ]
})
export class ManagerModule { }
