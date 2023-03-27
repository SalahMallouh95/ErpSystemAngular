import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator|any;
  displayedColumns: string[] = ['Checkin', 'Checkout', 'Workinghour'];
  dataSource :any

  constructor(public man : ManagerService, public hr : HrService,public employeeService:EmployeeService,private auth:AuthService){


  }
  userdata:any

  async ngOnInit() { 
    this.userdata=this.auth.getdata()
    await this.man.GetAttendance(this.userdata)
    
    this.dataSource= new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator; 
    
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
