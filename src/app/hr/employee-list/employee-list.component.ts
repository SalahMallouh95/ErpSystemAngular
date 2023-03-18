import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{


  constructor(private router:Router,public hrService:HrService, private spinner:NgxSpinnerService)
  {

  }
  user:any={}

  ngOnInit(): void {
    this.hrService.GetAllEmployee();  


  }
  async GetValues(id:any){

    this.user.userid=id
    this.hrService.GetAllRole()
    this.hrService.GetAllDepartment()
    await this.hrService.GetEmpInfo(this.user);

    console.log(this.hrService.empInfo);    
    this.router.navigate(['Hr/EmpDetails']);
  }
  
}
