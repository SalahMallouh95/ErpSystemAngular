import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-createsolution',
  templateUrl: './createsolution.component.html',
  styleUrls: ['./createsolution.component.css']
})
export class CreatesolutionComponent {
  constructor(public employeeService:EmployeeService,private router:Router){

  }
 
  ngOnInit(): void {
   
  }
  
}
