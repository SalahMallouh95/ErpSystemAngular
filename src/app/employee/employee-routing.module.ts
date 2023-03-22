import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveDetailsComponent } from '../hr/leave-details/leave-details.component';
import { CreateleaveComponent } from './createleave/createleave.component';
import { CreatesolutionComponent } from './createsolution/createsolution.component';
import { EditsolutionComponent } from './editsolution/editsolution.component';
import { GetsolutionComponent } from './getsolution/getsolution.component';
import { GettaskComponent } from './gettask/gettask.component';
import { GrtleavesComponent } from './grtleaves/grtleaves.component';
import { LeavedetailComponent } from './leavedetail/leavedetail.component';
import { MainComponent } from './main/main.component';
import { SolutindetailComponent } from './solutindetail/solutindetail.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
{
  path:'',
  component:MainComponent
}
,{
  path:'getleaves',
  component:GrtleavesComponent
}
,{
  path:'leavedetail',
  component:LeavedetailComponent
},{
    path:'getsolution',
    component:GetsolutionComponent
  },{
    path:'solutiondetail',
    component:SolutindetailComponent
  }
  ,{
    path:'Createleave',
    component:CreateleaveComponent
  }
  ,{
    path:'gettask',
    component:GettaskComponent
  }
  ,{
    path:'createsolution',
    component:CreatesolutionComponent
  }
  ,{
    path:'updateprofile',
    component:UpdateprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
