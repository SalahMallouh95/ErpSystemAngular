import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{


  constructor(private router:Router,public hrService:HrService)
  {

  }
  user:any={}

  ngOnInit(): void {
    this.hrService.GetAllEmployee();
    this.hrService.GetAllDepartment();
    this.hrService.GetAllRole();


  }
  async GetValues(id:any){

    this.user.userid=id
    await this.hrService.GetEmpInfo(this.user);
    console.log(this.hrService.empInfo);    
    this.router.navigate(['Hr/EmpDetails']);
  }
}
