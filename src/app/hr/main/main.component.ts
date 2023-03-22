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
    let data:any = {}
    data=localStorage.getItem("userInfo")?.valueOf
    console.log('data');    
    console.log(data);    
    let user:any={}
    user.userid=parseInt(data.userid)    
    console.log(user);                  
    await this.hrService.GetEmpInfo(user)
    localStorage.setItem('fullUserInfo',this.hrService.empInfo) 
    console.log(localStorage.getItem("fullUserInfo"));

    
  }
}
