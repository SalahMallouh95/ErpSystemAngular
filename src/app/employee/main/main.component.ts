import { Component,ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
 

  constructor(public man : ManagerService, public hr : HrService,public employeeService:EmployeeService,private auth:AuthService){


  }
  emp : any = {}
  //id: number =1
  userdata:any
  async ngOnInit(){
    this.userdata=this.auth.getdata()       
    await this.hr.GetEmpInfo(this.userdata)
    this.auth.systemUserInfo=this.hr.empInfo   
    this.emp.userid = this.auth.systemUserInfo.userid
    this.man.GetManagerPrifile(this.emp)
    await this.man.GetAttendance(this.emp) 
    await this.hr.GetAllNews()
    this.hr.OneNews = await this.hr.AllNews[0]
    
  }
  
}
