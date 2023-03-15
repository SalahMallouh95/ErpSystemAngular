import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-grtleaves',
  templateUrl: './grtleaves.component.html',
  styleUrls: ['./grtleaves.component.css']
})

export class GrtleavesComponent implements OnInit{
constructor(public employeeService:EmployeeService,private router:Router){

}
range = new FormGroup({
  startdate: new FormControl<Date | null>(null),
  enddate: new FormControl<Date | null>(null),
});

ngOnInit(): void {
    this.leaves.userid=1;
    this.employeeService.GetAllleave(this.leaves);
   
}
leaves :any={}
async GetValue(id :any){
await this.employeeService.GetAllleave(this.leaves);
}
leave :any={}
async GetValues(id :any){
  this.leave.leaveid=id
  await this.employeeService.GetleaveById(this.leave)
  this.router.navigate(['Employee/leavedetail']);
}
async Search(){
  await this.employeeService.Search(this.range.value)
}
}
