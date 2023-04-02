import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'Auth'
    , loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  }
  , {
    path: 'Employee',
    loadChildren: () => import('./employee/employee.module').then(x => x.EmployeeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Manager',
    loadChildren: () => import('./manager/manager.module').then(x => x.ManagerModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'Hr',
    loadChildren: () => import('./hr/hr.module').then(x => x.HrModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
