import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LeavedetailComponent } from '../leavedetail/leavedetail.component';
import { HrService } from 'src/app/hr.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-grtleaves',
  templateUrl: './grtleaves.component.html',
  styleUrls: ['./grtleaves.component.css']
})

export class GrtleavesComponent implements OnInit {
  @ViewChild('CreateForm') Create: any
  @ViewChild('UpdateForm') Update: any
  @ViewChild('DeleteForm') Delete: any
  constructor(public employeeService: EmployeeService, private router: Router, public dialog: MatDialog, public hrService: HrService,private auth:AuthService) {

  }

  ngOnInit(): void {
    this.leaves.userid = this.auth.systemUserInfo.userid;
    this.employeeService.GetAllleave(this.leaves);
    this.hrService.GetAllLeaveTypes();
    this.hrService.documentName={}
    this.hrService.documentName.imagefilename=null

  }
  leaves: any = {}
  async GetValue(id: any) {
    await this.employeeService.GetAllleave(this.leaves);
  }
  leave: any = {}
  async GetValues(id: any) {
    this.leave.leaveid = id
    await this.employeeService.GetleaveById(this.leave)
    this.OpenMoreInfoDialog();
  }
  range = new FormGroup({
    dateFrom: new FormControl<Date | null>(null),
    dateTo: new FormControl<Date | null>(null),
    userid: new FormControl
  });
  OpenMoreInfoDialog() {
    this.dialog.open(LeavedetailComponent, {
      height: '300px',
      width: '300px',
    })
  }
  async Search() {
    this.range.value.userid = this.auth.systemUserInfo.userid
    await this.employeeService.Search(this.range.value)
    console.log(this.employeeService.allleaves)
  }

  CreateLeaveForm = new FormGroup(
    {
      leavetypeid: new FormControl(),
      startdate: new FormControl(),
      enddate: new FormControl(),
      message: new FormControl(),
      userid: new FormControl(),
      documentfilename: new FormControl()
    })
  async CreateLeave() {
    this.CreateLeaveForm.value.userid =this.auth.systemUserInfo.userid
    await this.employeeService.CreateLeave(this.CreateLeaveForm.value)
    this.employeeService.GetAllleave(this.leaves)
    console.log(this.CreateLeaveForm.value)
  }

  OpenDialog() {

    this.dialog.open(this.Create, {
      height: '600px',
      width: '600px',
    })
  }
  //  UpdateLeaveForm = new FormGroup(
  //   { leavetypeid : new FormControl (),
  //    startdate : new FormControl(),
  //    enddate : new FormControl(),
  //    message : new FormControl(),
  //    userid : new FormControl(),
  //    documentfilename:new FormControl()
  //  })
  async OpenUpdateDialog(id: number) {
    let leave2: any = {}
    leave2.leaveid = id;
    await this.employeeService.GetleaveById(leave2)
    console.log(this.employeeService.leave);
    this.CreateLeaveForm.patchValue(this.employeeService.leave)
    this.dialog.open(this.Update, {
      height: '600px',
      width: '600px',
    })

  }

  async UpdateLeave() {
    if(this.hrService.documentName.imagefilename!=null && this.hrService.documentName.imagefilename!=undefined && this.hrService.documentName.imagefilename!='')
    this.employeeService.leave.documentfilename = this.hrService.documentName.imagefilename
    this.CreateLeaveForm.value.userid = this.auth.systemUserInfo.userid
    console.log(this.CreateLeaveForm.value);
    await this.employeeService.UpdateLeave(this.CreateLeaveForm.value)
    this.employeeService.GetAllleave(this.leaves)

  }

  async OpenDeleteDialog(id: number) {
    let leave2: any = {}
    leave2.leaveid = id;
    await this.employeeService.GetleaveById(leave2)
    this.dialog.open(this.Delete)
  }

  async DeleteLeave() {
    await this.employeeService.DeleteLeave(this.employeeService.leave.leaveid)
    this.employeeService.GetAllleave(this.leaves)
  }
  async UploadDoc(file: any) {
    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrService.UploadDocument(formData)
    console.log(this.CreateLeaveForm.value.documentfilename);

  }
}