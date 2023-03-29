import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { GrtleavesComponent } from './grtleaves/grtleaves.component';
import { LeavedetailComponent } from './leavedetail/leavedetail.component';
import { GetsolutionComponent } from './getsolution/getsolution.component';
import { SolutindetailComponent } from './solutindetail/solutindetail.component';
import { CreateleaveComponent } from './createleave/createleave.component';
import { GettaskComponent } from './gettask/gettask.component';
import { CreatesolutionComponent } from './createsolution/createsolution.component';
import { EditsolutionComponent } from './editsolution/editsolution.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ETreeComponent } from './e-tree/e-tree.component';

@NgModule({
  declarations: [
    MainComponent,
    GrtleavesComponent,
    LeavedetailComponent,
    GetsolutionComponent,
    SolutindetailComponent,
    CreateleaveComponent,
    GettaskComponent,
    CreatesolutionComponent,
    EditsolutionComponent,
    UpdateprofileComponent,
    CheckinComponent,
    ETreeComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class EmployeeModule { }
