import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(private spinner: NgxSpinnerService,public man : ManagerService, public hr : HrService,public employeeService:EmployeeService,private auth : AuthService ){


  }
  emp : any = {}
  

  ngOnInit(){
    this.spinner.show()

    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp   
    this.emp = userData       
    this.man.GetManagerPrifile(userData)
    this.man.GetAttendance(userData)
    
    this.spinner.hide()
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
