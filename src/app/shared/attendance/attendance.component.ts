import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  constructor(public man : ManagerService, public hr : HrService,public employeeService:EmployeeService,private auth:AuthService){


  }
  async checkin(){
    await this.employeeService.Checkin(this.auth.systemUserInfo)
    this.man.GetManagerPrifile(this.auth.systemUserInfo)
    this.man.GetAttendance(this.auth.systemUserInfo)
    this.auth.systemUserInfo.state=1
  }
  async checkOut(){
    await this.employeeService.checkout(this.auth.systemUserInfo)
    this.man.GetManagerPrifile(this.auth.systemUserInfo)
    this.man.GetAttendance(this.auth.systemUserInfo)
    this.auth.systemUserInfo.state=0
    
  }
}
