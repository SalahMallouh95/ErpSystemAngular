import { Component } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
      
   user:any={"userid":null}
   
  
  constructor(public hrService:HrService){

       }

       async ngOnInit(){
        let data=JSON.parse(localStorage.getItem("fullUserInfo")+'')
        this.user.userid= parseInt(data.userid);               
        await this.hrService.GetEmpInfo(this.user)        
         this.hrService.GetAllDepartment()
         this.hrService.GetAllRole()       

       }
}
