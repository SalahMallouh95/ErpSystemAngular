import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { ToastrModule ,ToastNoAnimationModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  exports:[
    FormsModule,
    ToastrModule,
    NgxSpinnerModule,
    MatTableModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
