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





@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    ManagerSideBarComponent,
    DashHeaderComponent,
    HrSidebarComponent
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
    HrSidebarComponent
  ]
})
export class SharedModule { }
