import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
@Component({
  selector: 'app-grtleaves',
  templateUrl: './grtleaves.component.html',
  styleUrls: ['./grtleaves.component.css']
})

export class GrtleavesComponent implements OnInit{
constructor(public employeeService:EmployeeService,private router:Router){

}
allLeavesList :any []|undefined
  
ngOnInit(): void {
    this.allLeavesList=this.employeeService.allLeaves.filter(l=>l.userid==1)
  }



GetValues(id :any){
  this.router.navigate(['Employee/leavedetail',id]);
}
}
