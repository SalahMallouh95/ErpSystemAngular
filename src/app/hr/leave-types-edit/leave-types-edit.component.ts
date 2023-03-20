import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-leave-types-edit',
  templateUrl: './leave-types-edit.component.html',
  styleUrls: ['./leave-types-edit.component.css']
})
export class LeaveTypesEditComponent {
  constructor(public hrService:HrService){}

  levType =new FormGroup({
  leavetype:new FormControl('',Validators.required),
  leavetypeid:new FormControl()
 })

 ngOnInit(){

  this.levType.patchValue(this.hrService.leaveTypeInfo)
 }

 async CreateLeaveType(){

  await this.hrService.CreateLeaveType(this.levType.value)
  this.hrService.GetAllLeaveTypes()

 }

 async SaveLeaveType(){
  
  await this.hrService.UpdateLeaveType(this.levType.value)
  this.hrService.GetAllLeaveTypes()
 }
}
