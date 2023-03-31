import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MMyLeaveDetailsComponent } from '../m-my-leave-details/m-my-leave-details.component';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-m-leaves',
  templateUrl: './m-leaves.component.html',
  styleUrls: ['./m-leaves.component.css']
})
export class MLeavesComponent {

  @ViewChild('DeleteDio') Deletedia: any
  constructor(private spinner: NgxSpinnerService, public employeeService: EmployeeService, public managerserv: ManagerService, private route: Router, public dialog: MatDialog, private auth: AuthService) {

  }


  id: number = this.auth.systemUserInfo.userid
  userData : any = {}
  async ngOnInit() {
    this.spinner.show()
     this.userData = this.auth.getdata()
    await this.managerserv.GetMyLeaves(this.userData)
    this.spinner.hide()
  }

  leave: any = {}
  async SendSelectorMyLeaveId(id: any) {
    this.leave.leaveid = id
    await this.managerserv.GetLeaveDetails(this.leave)
    this.OpenMoreInfoDialog()

  }

  OpenMoreInfoDialog() {
    this.spinner.show()
    this.dialog.open(MMyLeaveDetailsComponent)
    this.spinner.hide()
  }




  async DeleteLeave() {

    await this.employeeService.DeleteLeave(this.managerserv.leaveInfo.leaveid)
    await this.managerserv.GetMyLeaves(this.userData)
  }

  OpenDeleteDialog(id: any) {
    this.leave.leaveid = id
    this.managerserv.GetLeaveDetails(this.leave)
    this.dialog.open(this.Deletedia);

  }

}
