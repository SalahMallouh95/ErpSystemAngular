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
  
  allSolutionList :any []=this.employeeService.allsultion
  
  GetValues(id :any){
    this.router.navigate(['Employee/solutiondetail',id]);
  }
  }
  
