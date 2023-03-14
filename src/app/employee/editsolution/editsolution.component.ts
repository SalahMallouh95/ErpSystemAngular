import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-editsolution',
  templateUrl: './editsolution.component.html',
  styleUrls: ['./editsolution.component.css']
})
export class EditsolutionComponent {
  constructor(public employeeService:EmployeeService,private router:Router){

  }

}
