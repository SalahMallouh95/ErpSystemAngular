import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  constructor(private spinner: NgxSpinnerService, public man: ManagerService, public hr: HrService, public employeeService: EmployeeService, private auth: AuthService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  displayedColumns: string[] = ['Checkin', 'Checkout', 'Workinghour'];
  dataSource: any


  emp: any = {}

  async ngOnInit() {
    this.spinner.show()

    let userData: any = JSON.parse(localStorage.getItem('userInfo') + '')
    userData.userid = parseInt(userData.userid)
    userData.roleid = parseInt(userData.roleid)
    delete userData.exp
    this.emp = userData
    await this.man.GetManagerPrifile(userData)
    await this.man.GetAttendance(userData)

    this.dataSource = new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator;

    this.spinner.hide()
  }

  async checkin() {

    this.spinner.show()
    await this.employeeService.Checkin(this.emp)
    this.man.GetManagerPrifile(this.emp)
    await this.man.GetAttendance(this.emp)
    this.emp.state = 1

    this.dataSource = new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator;
    
    this.spinner.hide()
  }
  async checkOut() {

    this.spinner.show()
    await this.employeeService.checkout(this.emp)
    this.man.GetManagerPrifile(this.emp)
    await this.man.GetAttendance(this.emp)
    this.emp.state = 0

    this.dataSource = new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator;

    this.spinner.hide()
  }

}
