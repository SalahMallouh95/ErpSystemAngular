import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../home/about/about.component';
import { AboutUsManageComponent } from './about-us-manage/about-us-manage.component';
import { AllEmpLeavesComponent } from './all-emp-leaves/all-emp-leaves.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentEmpListComponent } from './department-emp-list/department-emp-list.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeManageComponent } from './home-manage/home-manage.component';
import { HrMyAttendanceComponent } from './hr-my-attendance/hr-my-attendance.component';
import { HrTreeComponent } from './hr-tree/hr-tree.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LeaveTypesCreateComponent } from './leave-types-create/leave-types-create.component';
import { LeaveTypesEditComponent } from './leave-types-edit/leave-types-edit.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { MainComponent } from './main/main.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { PayoutComponent } from './payout/payout.component';
import { SalaryPaymentComponent } from './salary-payment/salary-payment.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

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
    path:"LeaveDetails",
    component:LeaveDetailsComponent
  },
  {
    path:"EmpList",
    component:EmployeeListComponent
  },
  {
    path:"EmpDetails",
    component:EmployeeDetailsComponent
  },
  {
    path:"leaveType",
    component:LeaveTypesComponent

  },
  {
    path:"leaveTypeCreate",
    component:LeaveTypesCreateComponent
  },
  {
    path:"leaveTypeEdit",
    component:LeaveTypesEditComponent
  },
  {
    path:"Department",
    component:DepartmentComponent

  },
  {
    path:"DepartmentCreate",
    component:DepartmentCreateComponent
  },
  {
    path:"DepartmentEdit",
    component:DepartmentEditComponent
  },
  {
    path:"DepartmentEmp",
    component:DepartmentEmpListComponent
  },
  {
    path:"HomeEdit",
    component:HomeManageComponent
  },
   {
    path:"AboutUsManage",
    component:AboutUsManageComponent
  },
  {
    path:"ContactUsMessages",
    component:ContactUsComponent
  },
  {
    path:"AddEmp",
    component:EmployeeAddComponent
  },
  {
    path:"Service",
    component:OurServiceComponent
  },
  {
    path:"UpdateProfile",
    component:UpdateProfileComponent
  },
  {
    path: 'Payout',
    component: PayoutComponent
  },
  {
    path: 'Payment',
    component: SalaryPaymentComponent
  },
  {
    path: 'attendance',
    component: HrMyAttendanceComponent
  },
  {
    path: 'tree',
    component: HrTreeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class HrRoutingModule { }
