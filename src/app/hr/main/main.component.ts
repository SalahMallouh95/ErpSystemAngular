import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    
  constructor(public hrService:HrService,private auth:AuthService){}

 async ngOnInit(){
    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp          
    await this.hrService.GetEmpInfo(userData)
    this.auth.systemUserInfo=this.hrService.empInfo    
    localStorage.setItem('fullUserInfo',JSON.stringify(this.hrService.empInfo)) 
           
  }
}
