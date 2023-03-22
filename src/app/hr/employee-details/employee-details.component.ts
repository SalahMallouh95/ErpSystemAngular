import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from 'src/app/manager.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @ViewChild('DeleteDio') Deletedia: any

  constructor(public hrservice: HrService, public dialog: MatDialog,public managerService:ManagerService) {

  }


  empInfoForm = new FormGroup({
    userid: new FormControl(),
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl(''),
    phonenumber: new FormControl(),
    address: new FormControl(),
    salary: new FormControl(),
    ssn: new FormControl('', Validators.required),
    roleid: new FormControl('', Validators.required),
    departmentid: new FormControl('', Validators.required),
    bankinfoid: new FormControl('', Validators.required),
    imagefilename: new FormControl(),

  })
  async ngOnInit() {

  
    await this.empInfoForm.reset()
    this.empInfoForm.patchValue(this.hrservice.empInfo);
    this.managerService.GetAttendance(this.hrservice.empInfo)
    this.empInfoForm.markAsTouched();
    this.hrservice.documentName={}
    this.hrservice.documentName.imagefilename=null

  }

  async UploadPhoto(file: any) {
    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrservice.UploadDocument(formData)
  }

  async UpdateProfile() {
    if(this.hrservice.documentName.imagefilename!=null && this.hrservice.documentName.imagefilename!=undefined && this.hrservice.documentName.imagefilename!='')
    this.empInfoForm.value.imagefilename = this.hrservice.documentName.imagefilename
    await this.hrservice.UpdateEmpProfile(this.empInfoForm.value)
    this.hrservice.documentName.imagefilename
     this.hrservice.GetEmpInfo(this.hrservice.empInfo)
  }

  OpenDeleteDialog() {

    this.dialog.open(this.Deletedia);

  }

  async DeleteEmpProfile() {

    await this.hrservice.DeleteEmpProfile(this.empInfoForm.value.userid)
    history.back()

  }


}


