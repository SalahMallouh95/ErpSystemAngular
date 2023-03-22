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
        
        this.user.userid=3;               
        await this.hrService.GetEmpInfo(this.user)
        console.log(this.hrService.empInfo);
        
         this.hrService.GetAllDepartment()
         this.hrService.GetAllRole()       

       }
}
