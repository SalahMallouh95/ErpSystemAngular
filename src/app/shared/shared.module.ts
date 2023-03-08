import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'




@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeFooterComponent,
    HomeHeaderComponent,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class SharedModule { }
