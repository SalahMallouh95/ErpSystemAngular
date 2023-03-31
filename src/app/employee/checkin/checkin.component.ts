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

  constructor(public man : ManagerService, public hrService : HrService,public employeeService:EmployeeService,private auth:AuthService){


  }
  userdata:any

  async ngOnInit() { 
    this.hrService.spinner.show()

    this.userdata=this.auth.getdata()
    await this.man.GetAttendance(this.userdata)    
    this.dataSource= new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator; 
    this.hrService.spinner.hide()

    
  }
  async checkin(){
    this.hrService.spinner.show()

    await this.employeeService.Checkin(this.userdata)
    await this.man.GetManagerPrifile(this.userdata)
    await this.man.GetAttendance(this.userdata)
    this.dataSource= new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator; 
    
    this.auth.systemUserInfo.state=1
    this.hrService.spinner.hide()


  }
  async checkOut(){
    this.hrService.spinner.show()

    await this.employeeService.checkout(this.userdata)
    await this.man.GetManagerPrifile(this.userdata)
    await this.man.GetAttendance(this.userdata)
    this.dataSource= new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator; 
    
    this.auth.systemUserInfo.state=0
    this.hrService.spinner.hide()

    
  }
}
