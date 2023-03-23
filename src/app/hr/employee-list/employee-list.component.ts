import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(private router: Router, public hrService: HrService,private auth:AuthService) {

  }
  user: any = {}

  async ngOnInit() {
    let userData=JSON.parse(localStorage.getItem("fullUserInfo")+'')
    userData.userid= parseInt(userData.userid);
    await this.hrService.GetAllEmployee();
    this.hrService.allEmp = this.hrService.allEmp.filter((e: any) => e.userid != 3)    

  }

  async GetValues(id: any) {
    this.user.userid = id
    this.hrService.GetAllDepartment()
    this.hrService.GetAllRole()
    await this.hrService.GetEmpInfo(this.user);
    this.router.navigate(['Hr/EmpDetails']);
  }

  AddEmp() {
    this.hrService.GetAllDepartment()
    this.hrService.GetAllRole()
    this.router.navigate(['Hr/AddEmp']);
  }

}
