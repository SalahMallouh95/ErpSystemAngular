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
  ngOnInit(): void {
    this.hrService.GetAllEmployee();
  }
  GetValues(id:any){
   this.router.navigate(['Hr/EmpDetails',id]);
  }
  
}
