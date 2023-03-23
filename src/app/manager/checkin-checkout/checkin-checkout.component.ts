import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-checkin-checkout',
  templateUrl: './checkin-checkout.component.html',
  styleUrls: ['./checkin-checkout.component.css']
})
export class CheckinCheckoutComponent {

  constructor(public man : ManagerService, public hr : HrService,public employeeService:EmployeeService,private auth : AuthService ){


  }
  emp : any = {}
  id: number = this.auth.systemUserInfo.userid

  ngOnInit(){

    this.emp.userid = this.id
    this.man.GetManagerPrifile(this.emp)
    this.man.GetAttendance(this.emp)
  }
  async checkin(){
    await this.employeeService.Checkin(this.emp)
    this.man.GetManagerPrifile(this.emp)
    this.man.GetAttendance(this.emp)
  }
  async checkOut(){
    await this.employeeService.checkout(this.emp)
    this.man.GetManagerPrifile(this.emp)
    this.man.GetAttendance(this.emp)
  }

}
