import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent {

  constructor(private route:Router,public auth:AuthService,private hrService:HrService){}
  user:any

  async ngOnInit(){
    this.user=JSON.parse(localStorage.getItem('userInfo')+'') 
    this.user.roleid=parseInt(this.user.roleid)
    this.user.userid=parseInt(this.user.userid)
    delete this.user.exp
    await this.hrService.GetAllEmployee()
    this.auth.systemUserInfo=await this.hrService.allEmp.find((e:any)=>e.userid==this.user.userid)  
  }

  Logout(){
    localStorage.clear();
    this.route.navigate(['']);
    }

    Profile(){
      if(this.auth.systemUserInfo.roleid==1)
      {
        this.route.navigate(['Hr/UpdateProfile']);
      }else 
       if(this.auth.systemUserInfo.roleid==2)
      {
        this.route.navigate(['Manager/UpdateProfile']);
      }else
      {
        this.route.navigate(['Employee/updateprofile']);
      }
    }

}
