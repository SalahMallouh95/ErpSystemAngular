import { Component } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
      
   user:any={"userid":null}
   
  
  constructor(public hrService:HrService,private auth:AuthService,private spiner:NgxSpinnerService){

       }

       async ngOnInit(){
        this.hrService.spinner.show()

        let data=JSON.parse(localStorage.getItem("userInfo")+'')
        this.user.userid= parseInt(data.userid)             
         await this.hrService.GetEmpInfo(this.user)        
         this.hrService.GetAllDepartment()
         this.hrService.GetAllRole()    
         this.hrService.spinner.hide()

       }
}
