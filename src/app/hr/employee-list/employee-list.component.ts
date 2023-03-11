import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
allEmp:any[]=this.hrService.allEmp;

  constructor(private router:Router,public hrService:HrService)
  {

  }
  ngOnInit(): void {
    
  }
  GetValues(id:any){
   this.router.navigate(['Hr/EmpDetails',id]);
  }
}
