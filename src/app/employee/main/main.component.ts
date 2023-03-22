import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public man : ManagerService, public hr : HrService,public employeeService:EmployeeService){


  }
  emp : any = {}
  id: number =1

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
