import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import { DepartmentCreateComponent } from '../department-create/department-create.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('DeleteDio') Deletedia:any


  constructor(public hrService:HrService,public router:Router,public dialog:MatDialog){}
  rawDepid:number|undefined
  
  ngOnInit(): void {
    this.hrService.GetAllDepartment();
  }

 async ViewEmp(id:any){
     await  this.hrService.GetAllEmployee()
       this.hrService.allEmp=this.hrService.allEmp.filter((emp: { departmentid: any; })=>emp.departmentid==id);
       this.router.navigate(['Hr/DepartmentEmp']);
  }
  async DeleteDep(id:any){
    await this.hrService.DeleteDep(id)
    this.ngOnInit()
   }

   OpenDeleteDialog(id:any){
    this.rawDepid=id
    this.dialog.open(this.Deletedia);

   }

   OpenCreateDialog(){
    this.dialog.open(DepartmentCreateComponent);
   }
 
}
