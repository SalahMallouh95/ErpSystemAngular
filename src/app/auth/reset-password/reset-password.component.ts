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
  passString:any

  loginForm= new FormGroup(
    {
      copassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
   
    }
  )

  
constructor(private route:ActivatedRoute,private auth:AuthService,private hrService:HrService,private router:Router){}

async ngOnInit(){
this.passString=this.route.snapshot.params['passwordparam'];
let pass:any={}
pass.passwordparam=this.passString
await this.auth.GetPassString(pass)
if(this.auth.userResetPasswordInfo==null)
{

}

}

}
