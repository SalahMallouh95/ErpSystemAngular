import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-department-emp-list',
  templateUrl: './department-emp-list.component.html',
  styleUrls: ['./department-emp-list.component.css']
})
export class DepartmentEmpListComponent implements OnInit{

  allEmp:any[]| undefined 

  constructor(private router:Router,public hrService:HrService)
  {

  }
  ngOnInit(): void {
    this.allEmp=this.hrService.allEmp.filter(emp=>emp.Department=="IT");
  }
  GetValues(id:any){
   this.router.navigate(['Hr/EmpDetails',id]);
  }
}