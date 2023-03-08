import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm= new FormGroup(
    {
      email : new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
   
    }
  )

  GetDate()
  {
    const user =this.loginForm.value;
  console.log(user)
  }
  }

