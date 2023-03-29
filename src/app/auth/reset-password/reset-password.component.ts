import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  passString:any=this.route.snapshot.params['passwordparam'];

  loginForm= new FormGroup(
    {
      copassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
   
    }
  )

  
constructor(private route:ActivatedRoute,private auth:AuthService,private hrService:HrService,private router:Router){}

async ngOnInit(){
  localStorage.clear()
let pass:any={}
let user:any={}
pass.passwordparam=this.passString

await this.auth.GetPassString(pass)
if(this.auth.userResetPasswordInfo==null)
{
  this.auth.toastr.error("Link Expierd")
  this.router.navigate([""])
}
else 
{
  user.userid=this.auth.userResetPasswordInfo.useridnumber  
  await this.hrService.GetEmpInfo(user)

}

}

async ChangePassword(){

  if(await this.ChackPassword()){
    this.hrService.empInfo.password=this.loginForm.value.password
    await this.hrService.UpdateEmpProfile(this.hrService.empInfo)   
    await this.auth.DeletePassString(this.auth.userResetPasswordInfo) 
    this.auth.userResetPasswordInfo={}
    this.router.navigate(['Auth/'])
  }  
  else
  {
    this.auth.toastr.error("The password not matched with the coniform password!!")
  }

}

async ChackPassword(){
  if(this.loginForm.value.password===this.loginForm.value.copassword)
  return true
  else
  return false
}

}
