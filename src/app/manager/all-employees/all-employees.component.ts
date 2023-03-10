import { Component } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  constructor( public managerService : ManagerService ){

  }

  empList = this.managerService.employees;

}
