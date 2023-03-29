import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.css']
})
export class EnterEmailComponent {
  user:any
  loginForm= new FormGroup(
    {
      email : new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )])   
    }
    
  )

  constructor(private auth:AuthService,private hrService:HrService,private router:Router){}

 async SendResetEmail(){
  await this.GetUser()
  if(this.user!=null){
    let userData:any={}
    userData.useridnumber=this.user.userid
    await this.auth.CreatePassString(userData)
    await this.SendEmail()
    this.auth.toastr.success("Email for reset your password was sent yo your email")
  }
  }

  async GetUser(){
    await this.hrService.GetAllEmployee()
    this.user=this.hrService.allEmp.find((u:any)=>u.email===this.loginForm.value.email)
  }


  async SendEmail(){    
    let mail:any={}
      mail.to=this.user.email;
      mail.subject="Account password reset"
      mail.message="Dear Mr/Mis "
      +this.user.fname+" "+this.user.lname+"\nI hope this find you well \n you can reset Your password using the link below "+
    
      "http://localhost:4200/Auth/passwordReset/"+this.auth.userResetPasswordInfo.passwordparam
      +" \n please don't share the link with anyone\n"+
      +" \n best wishes \n StartUp";      
      this.auth.SendMail(mail)  
  }

}
