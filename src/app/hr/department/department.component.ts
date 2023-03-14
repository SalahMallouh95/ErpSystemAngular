import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(public hrService:HrService,public router:Router){}
  
  
  ngOnInit(): void {
    this.hrService.GetAllDepartment();
  }

 async ViewEmp(id:any){
     await  this.hrService.GetAllEmployee()
       console.log(this.hrService.allEmp);
       this.hrService.allEmp=this.hrService.allEmp.filter((emp: { departmentid: any; })=>emp.departmentid==id);
       console.log(this.hrService.allEmp);       
       this.router.navigate(['Hr/DepartmentEmp']);

  }
 
}
