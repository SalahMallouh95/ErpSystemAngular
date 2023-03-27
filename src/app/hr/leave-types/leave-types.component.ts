import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HrService } from 'src/app/hr.service';
import { LeaveTypesCreateComponent } from '../leave-types-create/leave-types-create.component';
import { LeaveTypesEditComponent } from '../leave-types-edit/leave-types-edit.component';

@Component({
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.css']
})
export class LeaveTypesComponent {
  @ViewChild('DeleteDio') Deletedia:any

  constructor(public hrService:HrService, public dialog:MatDialog){

  }

  ngOnInit(){
    this.hrService.spinner.show()

    this.hrService.GetAllLeaveTypes();
    
    this.hrService.spinner.hide()

  }
 
  CreateType(){
    this.dialog.open(LeaveTypesCreateComponent)

  }

  EditType(id:any){
    this.hrService.leaveTypeInfo=this.hrService.allLeaveTypes.find((lev: { leavetypeid: any; })=>lev.leavetypeid==id)    
    this.dialog.open(LeaveTypesEditComponent)

  }

  OpenDeleteDialog(id:any){
  this.hrService.leaveTypeInfo=this.hrService.allLeaveTypes.find((lev: { leavetypeid: any; })=>lev.leavetypeid==id)
  this.dialog.open(this.Deletedia)

  }
  async DeleteLeaveType(){
   await this.hrService.DeleteLeaveType(this.hrService.leaveTypeInfo.leavetypeid)
   this.hrService.GetAllLeaveTypes();

  }

}
