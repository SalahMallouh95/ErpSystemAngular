import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.css']
})
export class CreateLeaveComponent {

  constructor(public employeeService:EmployeeService,private router:Router){

  }
  leavetype1:any|{}
  ngOnInit(): void {
    this.leavetype1 = this.employeeService.leavetype1
  }

}
