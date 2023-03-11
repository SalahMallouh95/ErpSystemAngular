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






@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    ManagerSideBarComponent,
    DashHeaderComponent,
    HrSidebarComponent,
    RawAllEmpLeaveComponent,
    PersonCardComponent
      ],
  imports: [
    CommonModule,
    RouterModule
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
    PersonCardComponent
  ]
})
export class SharedModule { }
