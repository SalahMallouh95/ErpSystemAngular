import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmpLeavesComponent } from '../hr/all-emp-leaves/all-emp-leaves.component';
import { ManagerSideBarComponent } from '../shared/manager-side-bar/manager-side-bar.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { MAllEmpLeavesComponent } from './m-all-emp-leaves/m-all-emp-leaves.component';
import { MEmpInfoComponent } from './m-emp-info/m-emp-info.component';
import { MLeaveDetailsComponent } from './m-leave-details/m-leave-details.component';
import { MLeavesComponent } from './m-leaves/m-leaves.component';
import { MMyLeaveDetailsComponent } from './m-my-leave-details/m-my-leave-details.component';
import { MSolutionDetailsComponent } from './m-solution-details/m-solution-details.component';
import { MSolutionComponent } from './m-solution/m-solution.component';
import { MUpdateProfileComponent } from './m-update-profile/m-update-profile.component';
import { MainComponent } from './main/main.component';
import { TasksDetailesComponent } from './tasks-detailes/tasks-detailes.component';
import { TasksComponent } from './tasks/tasks.component';

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
    path: 'MyLeaveDetails/:id',
    component: MMyLeaveDetailsComponent
  },
  {
    path: 'LeaveDetails/:id',
    component: MLeaveDetailsComponent
  },
  {
    path: 'EmpInfo',
    component: MEmpInfoComponent
  },
  {
    path: 'CreateTask',
    component: CreateTaskComponent
  },
  {
    path: 'EditTask/:id',
    component: EditTaskComponent
  },
  {
    path: 'AllTasks',
    component: TasksComponent
  },
  {
    path: 'TaskDetails/:id',
    component: TasksDetailesComponent
  },
  {
    path: 'TaskSolution/:id',
    component: MSolutionComponent
  },
  {
    path: 'UpdateProfile',
    component: MUpdateProfileComponent
  },
  {
    path: 'SolutionDetails/:id',
    component: MSolutionDetailsComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
