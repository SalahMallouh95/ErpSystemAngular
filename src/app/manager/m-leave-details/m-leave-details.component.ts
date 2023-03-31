
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';


@Component({
  selector: 'app-m-leave-details',
  templateUrl: './m-leave-details.component.html',
  styleUrls: ['./m-leave-details.component.css']
})
export class MLeaveDetailsComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, public managerService: ManagerService, private route: ActivatedRoute, private auth: AuthService, private toaster: ToastrService) {
  }

  id: number | undefined


  ngOnInit(): void {

      }


  async AcceptLeave() {
    this.spinner.show()
    let user: any = {}
    user.userid = this.auth.systemUserInfo.userid
    let leave: any = {}
    leave.leaveid = this.managerService.leaveInfo.leaveid
    leave.state = 1
    await this.managerService.UpdateLeaveDetails(leave)
    this.managerService.GetLeaveDetails(leave)
    await this.managerService.GetAllLeaves(user)
    this.SendEmail(1)
    this.spinner.hide()
  }

  async RejectLeave() {
    this.spinner.show()
    let user: any = {}
    user.userid = this.auth.systemUserInfo.userid
    let leave: any = {}
    leave.leaveid = this.managerService.leaveInfo.leaveid
    leave.state = 0
    await this.managerService.UpdateLeaveDetails(leave)
    this.managerService.GetLeaveDetails(leave)
    await this.managerService.GetAllLeaves(user)
    this.SendEmail(0)
    this.spinner.hide()


  }

  async SendEmail(state: number) {
    this.spinner.show()
    let mail: any = {}
    await this.managerService.GetEmpInfo(this.managerService.leaveInfo.userid)
    console.log(this.managerService.empInformation);

    mail.to = this.managerService.empInformation.email;
    mail.subject = "Update regards your leave"
    if (state == 0) {
      mail.message = "Dear Mr/Mis "
        + this.managerService.empInformation.fname + " " + this.managerService.empInformation.lname + "\nI hope this find you well \n regards your leave that taking place\n from: " +
        this.managerService.leaveInfo.startdate + "\n to: " + this.managerService.leaveInfo.enddate +
        "\nleave type: " + this.managerService.leaveInfo.leavetype.leavetype +
        "\n we regret to inform you that we rejected your leave request" +
        ".\n best wishes\n" + this.auth.systemUserInfo.rolename + " : " + this.auth.systemUserInfo.fname + " " + this.auth.systemUserInfo.lname;
    }

    else {
      mail.message = "Dear Mr/Mis "
        + this.managerService.empInformation.fname + " " + this.managerService.empInformation.lname + "\nI hope this find you well \n regards your leave that taking place\n from: " +
        this.managerService.leaveInfo.startdate + "\n to: " + this.managerService.leaveInfo.enddate +
        "\n leave type: " + this.managerService.leaveInfo.leavetype.leavetype +
        "\n we happy to inform you that we accepted your leave request" +
        ".\n best wishes\n" + this.auth.systemUserInfo.rolename + " : " + this.auth.systemUserInfo.fname + " " + this.auth.systemUserInfo.lname;

    }
    this.auth.SendMail(mail)
    this.toaster.success("Email Sended")
    this.spinner.hide()
  }


}
