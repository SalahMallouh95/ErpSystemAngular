import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
 
  },
  {
    path:"ContactUs",
    component:ContactComponent
  },
  {
    path:"AboutUs",
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
