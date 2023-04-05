import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { MAllEmpLeavesComponent } from './m-all-emp-leaves/m-all-emp-leaves.component';
import { MLeavesComponent } from './m-leaves/m-leaves.component';
import { MLeaveDetailsComponent } from './m-leave-details/m-leave-details.component';
import { MEmpInfoComponent } from './m-emp-info/m-emp-info.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksDetailesComponent } from './tasks-detailes/tasks-detailes.component';
import { MMyLeaveDetailsComponent } from './m-my-leave-details/m-my-leave-details.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { MSolutionComponent } from './m-solution/m-solution.component';
import { MUpdateProfileComponent } from './m-update-profile/m-update-profile.component';
import { MSolutionDetailsComponent } from './m-solution-details/m-solution-details.component';
import { CheckinCheckoutComponent } from './checkin-checkout/checkin-checkout.component';
import { CreateLeaveComponent } from './create-leave/create-leave.component';
import { MtreeComponent } from './mtree/mtree.component';
import { DepDetailesComponent } from './dep-detailes/dep-detailes.component';
import { BillingComponent } from './billing/billing.component';



@NgModule({
  declarations: [


    MainComponent,
    MAllEmpLeavesComponent,
    MLeavesComponent,
    MLeaveDetailsComponent,
    MEmpInfoComponent,
    CreateTaskComponent,
    TasksComponent,
    TasksDetailesComponent,
    MMyLeaveDetailsComponent,
    EditTaskComponent,
    MSolutionComponent,
    MUpdateProfileComponent,
    MSolutionDetailsComponent,
    CheckinCheckoutComponent,
    CreateLeaveComponent,
    MtreeComponent,
    DepDetailesComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ]
})
export class ManagerModule { }
