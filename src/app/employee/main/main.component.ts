import { Component } from '@angular/core';
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

  async ngOnInit(){
    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp          
    await this.hr.GetEmpInfo(userData)
    this.auth.systemUserInfo=this.hr.empInfo   
    this.emp.userid = this.auth.systemUserInfo.userid
    this.man.GetManagerPrifile(this.emp)
    this.man.GetAttendance(this.emp) 
  }

}
