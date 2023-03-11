import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpLeavesComponent } from '../hr/all-emp-leaves/all-emp-leaves.component';
import { ManagerSideBarComponent } from '../shared/manager-side-bar/manager-side-bar.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { MAllEmpLeavesComponent } from './m-all-emp-leaves/m-all-emp-leaves.component';
import { MEmpInfoComponent } from './m-emp-info/m-emp-info.component';
import { MLeaveDetailsComponent } from './m-leave-details/m-leave-details.component';
import { MLeavesComponent } from './m-leaves/m-leaves.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'AllEmp',
    component: AllEmployeesComponent
  },
  {
    path: 'mAllEmpLeaves',
    component: MAllEmpLeavesComponent
  },
  {
    path: 'MyLeaves',
    component: MLeavesComponent
  },
  {
    path: 'LeaveDetails/:id',
    component: MLeaveDetailsComponent
  },
  {
    path: 'EmpInfo/:id',
    component: MEmpInfoComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
