import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpLeavesComponent } from './all-emp-leaves/all-emp-leaves.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
