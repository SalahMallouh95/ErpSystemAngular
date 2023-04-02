import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(private router: Router, public hrService: HrService, private auth: AuthService) {

  }
  user: any = {}
  ssn: number | undefined
  emplist: any
  viewOption = 1
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  displayedColumns: string[] = ['name', 'ssn', 'email','department', 'role', 'state','action'];
  dataSource: any
  hideShow=1
  data:any

  async ngOnInit() {
    this.hrService.spinner.show()
    this.data = this.auth.getdata()    
    await this.hrService.GetAllEmployee();
    this.emplist = this.hrService.allEmp.filter((e: any) => e.userid != this.data.userid && e.isactivated==1)
    this.hrService.spinner.hide()
    this.dataSource = new MatTableDataSource(this.emplist);
    this.dataSource.paginator = this.paginator;
  }

  FiliterByssn() {
    if (this.ssn == null) {
      this.emplist = this.hrService.allEmp.filter((e: any) => e.userid != this.auth.systemUserInfo.userid)
    }
    else {
      this.emplist = this.hrService.allEmp.filter((e: any) => e.ssn == this.ssn)
    }
    this.dataSource = new MatTableDataSource(this.emplist);
    this.dataSource.paginator = this.paginator;

  }

  async GetValues(id: any) {
    this.hrService.spinner.show()

    this.user.userid = id
    this.hrService.GetAllDepartment()
    this.hrService.GetAllRole()
    await this.hrService.GetEmpInfo(this.user);
    this.hrService.spinner.hide()
    this.router.navigate(['Hr/EmpDetails']);
  }

  AddEmp() {
    this.hrService.spinner.show()

    this.hrService.GetAllDepartment()
    this.hrService.GetAllRole()
    this.router.navigate(['Hr/AddEmp']);
    this.hrService.spinner.hide()
  }

  ChangeView() {
    if (this.viewOption == 0) {
      this.viewOption = 1
    }
    else {
      this.viewOption = 0
    }
    this.dataSource = new MatTableDataSource(this.emplist);
    this.dataSource.paginator = this.paginator;
  }

  ShowHideActiveAccount(){

    if(this.hideShow==1){
      this.hideShow=0
      this.emplist = this.hrService.allEmp.filter((e: any) => e.userid != this.data.userid && e.isactivated==0)
      
    }
    else
    {
      this.hideShow=1
      this.emplist = this.hrService.allEmp.filter((e: any) => e.userid != this.data.userid && e.isactivated==1)

    }
    this.dataSource = new MatTableDataSource(this.emplist);
    this.dataSource.paginator = this.paginator;
  }

}
