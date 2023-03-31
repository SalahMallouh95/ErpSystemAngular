import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LeavedetailComponent } from '../leavedetail/leavedetail.component';
import { HrService } from 'src/app/hr.service';
import { AuthService } from 'src/app/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-grtleaves',
  templateUrl: './grtleaves.component.html',
  styleUrls: ['./grtleaves.component.css']
})

export class GrtleavesComponent implements OnInit {
  @ViewChild('CreateForm') Create: any
  @ViewChild('UpdateForm') Update: any
  @ViewChild('DeleteForm') Delete: any
  constructor(public employeeService: EmployeeService, private router: Router, public dialog: MatDialog, public hrService: HrService, private auth: AuthService) {

  }
   userdata:any
   @ViewChild(MatPaginator) paginator: MatPaginator|any;
   displayedColumns: string[] = ['leavetype', 'startdate', 'enddate','state','Action'];
   dataSource :any 
  async ngOnInit() {
    this.hrService.spinner.show()
    this.userdata=this.auth.getdata()
    this.leaves.userid = this.userdata.userid;
    await this.employeeService.GetAllleave(this.leaves);
    await this.hrService.GetAllLeaveTypes();
    this.hrService.documentName = {}
    this.hrService.documentName.imagefilename = null
    this.dataSource= new MatTableDataSource(this.employeeService.allleaves);
    this.dataSource.paginator = this.paginator
    this.hrService.spinner.hide()
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
    this.range.value.userid = this.userdata.userid
    await this.employeeService.Search(this.range.value)
    console.log(this.employeeService.allleaves)
    this.dataSource= new MatTableDataSource(this.employeeService.allleaves);
    this.dataSource.paginator = this.paginator
  }

  CreateLeaveForm = new FormGroup(
    {
      leaveid :new FormControl(),
      leavetypeid: new FormControl('',Validators.required),
      startdate: new FormControl('',Validators.required),
      enddate: new FormControl('',Validators.required),
      message: new FormControl('',Validators.required),
      userid: new FormControl(),
      documentfilename: new FormControl()
    })
  async CreateLeave() {
    
    this.CreateLeaveForm.value.userid = this.userdata.userid
    console.log(this.CreateLeaveForm.value)
    await this.employeeService.CreateLeave(this.CreateLeaveForm.value)
    await this.employeeService.GetAllleave(this.leaves)
    this.hrService.documentName.imagefilename=null
    this.dataSource= new MatTableDataSource(this.employeeService.allleaves);
    this.dataSource.paginator = this.paginator
  }

  OpenDialog() {
    this.CreateLeaveForm.reset()
    this.dialog.open(this.Create, {
      height: '600px',
      width: '600px',
    })
   
  }
  async OpenUpdateDialog(id: number) {
    let leave2: any = {}
    leave2.leaveid = id;
    await this.employeeService.GetleaveById(leave2)
    this.CreateLeaveForm.patchValue(this.employeeService.leave)
    this.dialog.open(this.Update, {
      height: '600px',
      width: '600px',
    })

  }

  async UpdateLeave() {
    this.CreateLeaveForm.value.userid = this.userdata.userid
    if (this.hrService.documentName.imagefilename != null && this.hrService.documentName.imagefilename != undefined && this.hrService.documentName.imagefilename != '')
    this.CreateLeaveForm.value.documentfilename = this.hrService.documentName.imagefilename
    await this.employeeService.UpdateLeave(this.CreateLeaveForm.value)
    await this.employeeService.GetAllleave(this.leaves)
    this.hrService.documentName.imagefilename=null
    this.dataSource= new MatTableDataSource(this.employeeService.allleaves);
    this.dataSource.paginator = this.paginator
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

  }
}