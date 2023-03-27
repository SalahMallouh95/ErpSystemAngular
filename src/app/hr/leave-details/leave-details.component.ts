import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {
  constructor(public hrService: HrService) {
  }

  ngOnInit() {


  }


  async AcceptLeave() {
    this.hrService.spinner.show()

    let leave: any = {}
    leave.leaveid = this.hrService.leaveInfo.leaveid
    leave.state = 1
    await this.hrService.UpdateLeaveDetails(leave)
    this.hrService.GetLeaveDetails(leave)
    this.hrService.GetAllLeaves()
    this.hrService.spinner.hide()


  }

  async RejectLeave() {
    this.hrService.spinner.show()

    let leave: any = {}
    leave.leaveid = this.hrService.leaveInfo.leaveid
    leave.state = 0
    await this.hrService.UpdateLeaveDetails(leave)
    this.hrService.GetLeaveDetails(leave)
    this.hrService.GetAllLeaves()
    this.hrService.spinner.hide()

  }
}
