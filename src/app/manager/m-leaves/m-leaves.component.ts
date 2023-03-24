import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MMyLeaveDetailsComponent } from '../m-my-leave-details/m-my-leave-details.component';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-m-leaves',
  templateUrl: './m-leaves.component.html',
  styleUrls: ['./m-leaves.component.css']
})
export class MLeavesComponent {

  constructor(public employeeService: EmployeeService,public managerserv : ManagerService , private route : Router,public dialog : MatDialog,private auth : AuthService){

  }

  managerLeaves : any = {}
  id : number =this.auth.systemUserInfo.userid
  
  async ngOnInit()  {
    this.managerLeaves.userid = this.id
   await this.managerserv.GetMyLeaves(this.managerLeaves)
  }

  async SendSelectorMyLeaveId(id : any){

    let leave : any = {}
    leave.leaveid = id
    await this.managerserv.GetLeaveDetails(leave)
    this.OpenMoreInfoDialog()

  }

  OpenMoreInfoDialog(){
    this.dialog.open(MMyLeaveDetailsComponent)
  }

  async DeleteLeave() {
    await this.employeeService.DeleteLeave(this.employeeService.leave.leaveid)
    this.employeeService.GetAllleave( this.managerLeaves)
  }

}
