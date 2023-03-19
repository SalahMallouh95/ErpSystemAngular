import { Component } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  empInfoForm = new FormGroup({
    fname: new FormControl(null,[Validators.required]),
    lname: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" )]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    phonenumber: new FormControl(),
    address: new FormControl(),
    salary: new FormControl(),
    ssn: new FormControl('',Validators.required),
    roleid: new FormControl('',Validators.required),
    departmentid: new FormControl('',Validators.required),
    bankinfoid: new FormControl('',Validators.required),
    imagefilename: new FormControl('UserDefaultImage.png',{nonNullable: true}),

  })

  constructor(public hrservice: HrService) {

  }

  ngOnInit(): void {
    this.hrservice.GetAllRole()
    this.hrservice.GetAllDepartment()
  }

  async AddEmp(){

      console.log(this.empInfoForm.value);

      await this.hrservice.AddEmpProfile(this.empInfoForm.value)
      this.empInfoForm.reset()
      this.empInfoForm.markAsUntouched()
      this.hrservice.documentName.imagefilename=undefined

      
  }

  async UploadPhoto(file: any) {
    let formData = new FormData();
   console.log(file);
   
    formData.append('file', file.files[0])
    await this.hrservice.UploadDocument(formData)
    this.empInfoForm.value.imagefilename = this.hrservice.documentName.imagefilename
    
  }

}
