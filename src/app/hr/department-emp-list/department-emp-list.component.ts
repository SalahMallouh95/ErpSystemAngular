import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { tick } from '@angular/core/testing';



@Component({
  selector: 'app-department-emp-list',
  templateUrl: './department-emp-list.component.html',
  styleUrls: ['./department-emp-list.component.css']
})
export class DepartmentEmpListComponent implements OnInit {

  allEmp: any[] | undefined
  user: any = {}
  lengtharyy: number = 0

  constructor(private route: Router, public hrService: HrService) {

  }
  ngOnInit() {

    this.allEmp = this.hrService.allEmp
    this.lengtharyy = this.hrService.allEmp.length

  }
  async GetValues(id: any) {
    this.hrService.spinner.show()

    this.user.userid = id
    await this.hrService.GetEmpInfo(this.user);
    this.hrService.spinner.hide()

    this.route.navigate(['Hr/EmpDetails']);


  }


}