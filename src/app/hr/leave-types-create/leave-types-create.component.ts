import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-types-create',
  templateUrl: './leave-types-create.component.html',
  styleUrls: ['./leave-types-create.component.css']
})
export class LeaveTypesCreateComponent {

   levType =new FormGroup({
   leavetype:new FormControl('',Validators.required)
  })


  CreateLeaveType(){

   

  }
  
}
