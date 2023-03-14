import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-getsolution',
  templateUrl: './getsolution.component.html',
  styleUrls: ['./getsolution.component.css']
})
export class GetsolutionComponent {
  constructor(public employeeService:EmployeeService,private router:Router){

  }
  
  allSolutionList :any []=this.employeeService.allsultion.filter(l=>l.taskid==1)
  alltaskList :any []=this.employeeService.alltask.filter(l=>l.userid==1)
  GetValues(id :any){
    this.router.navigate(['Employee/solutiondetail',id]);
  }
  GetValue(id :any){
    this.router.navigate(['Employee/editsolution',id]);
  }
  }
  

