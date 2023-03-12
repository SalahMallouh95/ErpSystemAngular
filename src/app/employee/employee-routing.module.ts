import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveDetailsComponent } from '../hr/leave-details/leave-details.component';
import { GetsolutionComponent } from './getsolution/getsolution.component';
import { GrtleavesComponent } from './grtleaves/grtleaves.component';
import { LeavedetailComponent } from './leavedetail/leavedetail.component';
import { MainComponent } from './main/main.component';
import { SolutindetailComponent } from './solutindetail/solutindetail.component';

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
  path:'leavedetail/:id',
  component:LeavedetailComponent
},{
    path:'getsolution',
    component:GetsolutionComponent
  },{
    path:'solutiondetail/:id',
    component:SolutindetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
