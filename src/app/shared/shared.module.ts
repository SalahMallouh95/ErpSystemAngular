import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { RouterModule } from '@angular/router';
import { ManagerSideBarComponent } from './manager-side-bar/manager-side-bar.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import {MatButtonModule} from '@angular/material/button';
import { HrSidebarComponent } from './hr-sidebar/hr-sidebar.component';
import { RawAllEmpLeaveComponent } from './raw-all-emp-leave/raw-all-emp-leave.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PersonCardComponent } from './person-card/person-card.component';
import { EmployeeSidbarComponent } from './employee-sidbar/employee-sidbar.component';
import { ToastrModule } from 'ngx-toastr';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { AttendanceComponent } from './attendance/attendance.component';
import { DataTablesModule } from 'angular-datatables';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DepTreeComponent } from './dep-tree/dep-tree.component';






@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    ManagerSideBarComponent,
    DashHeaderComponent,
    HrSidebarComponent,
    RawAllEmpLeaveComponent,
    PersonCardComponent,
    EmployeeSidbarComponent,
    AttendanceComponent,
    DepTreeComponent
      ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    HomeFooterComponent,
    HomeHeaderComponent,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    DashHeaderComponent,
    ManagerSideBarComponent,
    HrSidebarComponent,
    RawAllEmpLeaveComponent,
    NgxSpinnerModule,
    PersonCardComponent,
    EmployeeSidbarComponent,
    FormsModule,
    ToastrModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatCardModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    DepTreeComponent
  ]
})
export class SharedModule { }
