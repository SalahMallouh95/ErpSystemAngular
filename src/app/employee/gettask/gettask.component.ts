import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-gettask',
  templateUrl: './gettask.component.html',
  styleUrls: ['./gettask.component.css']
})
export class GettaskComponent implements OnInit{
  constructor(public employeeService:EmployeeService,private router:Router){

  }
  ngOnInit(): void {
    this.alltaskList=this.employeeService.alltask.filter(l=>l.userid==1)
  }
  alltaskList :any| []
  
  GetValues(id :any){
    this.router.navigate(['Employee/getsolution',id]);
  }
}
