import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-leavedetail',
  templateUrl: './leavedetail.component.html',
  styleUrls: ['./leavedetail.component.css']
})
export class LeavedetailComponent {
constructor(private route:ActivatedRoute,public employeeService:EmployeeService){

}
 

  ngOnInit(): void {
    //this.id=this.route.snapshot.params['id'];

  }


}
