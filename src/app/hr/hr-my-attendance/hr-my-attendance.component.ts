import { Component } from '@angular/core';
import { async } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-hr-my-attendance',
  templateUrl: './hr-my-attendance.component.html',
  styleUrls: ['./hr-my-attendance.component.css']
})
export class HrMyAttendanceComponent {
  constructor(public man : ManagerService, public hrService : HrService,public employeeService:EmployeeService,public auth:AuthService){
  }
  async ngOnInit(){
    this.hrService.spinner.show()

    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)       
    delete userData.exp       
    await this.man.GetAttendance(userData)   
    this.hrService.spinner.hide()
   
  }
  async checkin(){
    this.hrService.spinner.show()

    await this.employeeService.Checkin(this.auth.systemUserInfo)
    this.man.GetManagerPrifile(this.auth.systemUserInfo)
    this.man.GetAttendance(this.auth.systemUserInfo)
    this.auth.systemUserInfo.state=1
    
    this.hrService.spinner.hide()

  }
  async checkOut(){

    this.hrService.spinner.show()

    await this.employeeService.checkout(this.auth.systemUserInfo)
    this.man.GetManagerPrifile(this.auth.systemUserInfo)
    this.man.GetAttendance(this.auth.systemUserInfo)
    this.auth.systemUserInfo.state=0

    this.hrService.spinner.hide()

  }
}
