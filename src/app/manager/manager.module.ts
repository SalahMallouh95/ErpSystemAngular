import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    
  
    MainComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    SharedModule
  ]
})
export class ManagerModule { }
