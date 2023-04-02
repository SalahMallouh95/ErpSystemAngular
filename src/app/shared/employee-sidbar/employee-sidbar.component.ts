import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-sidbar',
  templateUrl: './employee-sidbar.component.html',
  styleUrls: ['./employee-sidbar.component.css']
})
export class EmployeeSidbarComponent {
  taskCount=0

  constructor(public employeeService: EmployeeService,private auth:AuthService){

    this.employeeService.GetAlltask(this.auth.getdata());
    this.taskCount=this.employeeService.alltask1.filter((t:any)=>t.state==1).length

  }

  
}
