import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
      
   user:any={"userid":null}
   
  
  constructor(public hrService:HrService,private auth:AuthService){

       }

       async ngOnInit(){
        let data=JSON.parse(localStorage.getItem("fullUserInfo")+'')
        this.user.userid= this.auth.systemUserInfo.userid              
        await this.hrService.GetEmpInfo(this.user)        
         this.hrService.GetAllDepartment()
         this.hrService.GetAllRole()       

       }
}
