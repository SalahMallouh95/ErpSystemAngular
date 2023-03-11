import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  constructor(private route :Router ,public managerService : ManagerService ){

  }

  empList = this.managerService.employees;

  GetValues(id:any){
    this.route.navigate(['Manager/EmpInfo',id]);

    console.log(id);
    
  }
}
