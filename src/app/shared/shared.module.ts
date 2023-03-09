import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { RouterModule } from '@angular/router';
import { DashHeaderComponent } from './dash-header/dash-header.component';




@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    DashHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomeFooterComponent,
    HomeHeaderComponent,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
