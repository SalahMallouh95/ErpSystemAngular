import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./home/home.module').then(x=>x.HomeModule)
  },
  {
    path:'Auth'
    ,loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
  }
  ,{path:'Employee',
  loadChildren:()=>import('./employee/employee.module').then(x=>x.EmployeeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
