import { Component } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
       constructor(public hrService:HrService){

       }

       async ngOnInit(){
        let user:any={}
        user.userid=3;               
        await this.hrService.GetEmpInfo(user)
        console.log(this.hrService.empInfo);
        
         this.hrService.GetAllDepartment()
         this.hrService.GetAllRole()       

       }
}
