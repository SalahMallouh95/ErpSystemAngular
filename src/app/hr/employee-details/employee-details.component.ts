import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  @ViewChild('DeleteDio') Deletedia:any

  constructor(public hrservice: HrService,public dialog:MatDialog) {

  }

  
  empInfoForm = new FormGroup({
    userid: new FormControl(),
    fname: new FormControl(null,[Validators.required]),
    lname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )]),
    password: new FormControl(''),
    phonenumber: new FormControl(),
    address: new FormControl(),
    salary: new FormControl(),
    ssn: new FormControl('',Validators.required),
    roleid: new FormControl('',Validators.required),
    departmentid: new FormControl('',Validators.required),
    bankinfoid: new FormControl('',Validators.required),
    imagefilename: new FormControl(),

  })
  ngOnInit(): void {

    this.empInfoForm.patchValue(this.hrservice.empInfo);
    this.empInfoForm.markAsTouched();   
    
    
  }

  async UploadPhoto(file: any) {
    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrservice.UploadDocument(formData)
    this.empInfoForm.value.imagefilename = this.hrservice.documentName.imagefilename


  }

  ResetPic() {
    if (this.hrservice.empInfo.imagefilename != null|| this.hrservice.empInfo.imagefilename !=undefined) {
      this.empInfoForm.value.imagefilename = this.hrservice.empInfo.imagefilename
    } else {
      this.empInfoForm.value.imagefilename=null
    }

  }

  async UpdateProfile()
  {     
    await this.hrservice.UpdateEmpProfile(this.empInfoForm.value)
  }
  
  OpenDeleteDialog(){

    this.dialog.open(this.Deletedia);

   }
  

}


