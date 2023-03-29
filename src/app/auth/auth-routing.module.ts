import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterEmailComponent } from './enter-email/enter-email.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"passwordReset/:passwordparam",
    component:ResetPasswordComponent
  },
  {
    path:"Email",
    component:EnterEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
