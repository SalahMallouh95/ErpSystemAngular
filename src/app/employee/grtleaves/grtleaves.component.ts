import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-grtleaves',
  templateUrl: './grtleaves.component.html',
  styleUrls: ['./grtleaves.component.css']
})
export class GrtleavesComponent {
constructor(public employeeService:EmployeeService,private router:Router){

}

allLeavesList :any []=this.employeeService.allLeaves

GetValues(id :any){
  this.router.navigate(['Employee/leavedetail',id]);
}
}
