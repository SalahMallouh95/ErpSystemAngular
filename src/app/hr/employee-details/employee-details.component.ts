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
  depcount: any

  constructor(public hrService: HrService, public dialog: MatDialog, public managerService: ManagerService) {

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

    this.hrService.spinner.show()

    await this.empInfoForm.reset()
    this.empInfoForm.patchValue(this.hrService.empInfo);
    this.managerService.GetAttendance(this.hrService.empInfo)
    this.empInfoForm.markAsTouched();
    this.hrService.documentName = {}
    this.hrService.documentName.imagefilename = null
    this.hrService.GetAllDepartment()
    this.depcount = this.hrService.allDep.find((e: any) => e.userid == this.empInfoForm.value.userid)
    this.hrService.spinner.hide()


  }

  async UploadPhoto(file: any) {
    this.hrService.spinner.show()

    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrService.UploadDocument(formData)
    this.hrService.spinner.hide()

  }

  async UpdateProfile() {
    this.hrService.spinner.show()

    if (this.hrService.documentName.imagefilename != null && this.hrService.documentName.imagefilename != undefined && this.hrService.documentName.imagefilename != '')
      this.empInfoForm.value.imagefilename = this.hrService.documentName.imagefilename

    await this.hrService.UpdateEmpProfile(this.empInfoForm.value)
    this.hrService.documentName.imagefilename
    this.hrService.GetEmpInfo(this.hrService.empInfo)
    this.hrService.spinner.hide()

  }

  OpenDeleteDialog() {

    this.dialog.open(this.Deletedia);

  }

  async DeleteEmpProfile() {

    this.hrService.spinner.show()

    await this.hrService.DeleteEmpProfile(this.empInfoForm.value.userid)

    this.hrService.spinner.hide()

    history.back()

  }


}


