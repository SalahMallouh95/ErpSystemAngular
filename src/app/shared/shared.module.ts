import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
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
    MatButtonModule
  ]
})
export class SharedModule { }
