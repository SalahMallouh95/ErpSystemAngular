import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { AllEmpLeavesComponent } from './all-emp-leaves/all-emp-leaves.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { LeaveTypesEditComponent } from './leave-types-edit/leave-types-edit.component';
import { LeaveTypesCreateComponent } from './leave-types-create/leave-types-create.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { DepartmentEmpListComponent } from './department-emp-list/department-emp-list.component';
import { HomeManageComponent } from './home-manage/home-manage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsManageComponent } from './about-us-manage/about-us-manage.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PayoutComponent } from './payout/payout.component';
import { HrMyAttendanceComponent } from './hr-my-attendance/hr-my-attendance.component';
import { SalaryPaymentComponent } from './salary-payment/salary-payment.component';


@NgModule({
  declarations: [
    MainComponent,
    AllEmpLeavesComponent,
    LeaveDetailsComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    LeaveTypesComponent,
    LeaveTypesEditComponent,
    LeaveTypesCreateComponent,
    DepartmentComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    DepartmentEmpListComponent,
    HomeManageComponent,
    ContactUsComponent,
    AboutUsManageComponent,
    EmployeeAddComponent,
    OurServiceComponent,
    UpdateProfileComponent,
    PayoutComponent,
    HrMyAttendanceComponent,
    SalaryPaymentComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HrModule { }
