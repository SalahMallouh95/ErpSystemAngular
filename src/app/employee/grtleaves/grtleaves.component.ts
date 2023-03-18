import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LeaveDetailsComponent } from 'src/app/hr/leave-details/leave-details.component';
import { LeavedetailComponent } from '../leavedetail/leavedetail.component';

@Component({
  selector: 'app-grtleaves',
  templateUrl: './grtleaves.component.html',
  styleUrls: ['./grtleaves.component.css']
})

export class GrtleavesComponent implements OnInit{
@ViewChild('CreateForm') Create : any

constructor(public employeeService:EmployeeService,private router:Router, public dialog:MatDialog){

}

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
  this.OpenMoreInfoDialog();
}
range = new FormGroup({
  dateFrom: new FormControl<Date | null>(null),
  dateTo: new FormControl<Date | null>(null),
  userid:new FormControl
});
OpenMoreInfoDialog(){
  this.dialog.open(LeavedetailComponent, {
    height: '300px',
    width: '300px',
  })
}
async Search(){
 this.range.value.userid=1
 await this.employeeService.Search(this.range.value)
 console.log(this.employeeService.allleaves)
}

CreateLeaveForm = new FormGroup(
  { leavetypeid : new FormControl (),
   startdate : new FormControl(),
   enddate : new FormControl(),
   message : new FormControl(),
   userid : new FormControl()
 })
 async CreateLeave()
 {
  this.CreateLeaveForm.value.userid=1
 await this.employeeService.CreateLeave(this.CreateLeaveForm.value)
 this.employeeService.GetAllleave(this.leaves)
 console.log(this.CreateLeaveForm.value)
 }
 
 OpenDialog()
 {
   
   this.dialog.open(this.Create, {
    height: '600px',
    width: '600px',
  })
 }
}
