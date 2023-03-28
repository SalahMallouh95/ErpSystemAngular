import { Component } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  empInfoForm = new FormGroup({
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phonenumber: new FormControl(),
    address: new FormControl(),
    salary: new FormControl(),
    ssn: new FormControl('', [Validators.required]),
    roleid: new FormControl('', Validators.required),
    departmentid: new FormControl('', Validators.required),
    bankinfoid: new FormControl('', Validators.required),
    imagefilename: new FormControl('UserDefaultImage.png', { nonNullable: true }),

  })

  constructor(public hrService: HrService,private tostar:ToastrService) {

  }

  async ngOnInit(): Promise<void> {
    this.hrService.spinner.show()
    this.hrService.documentName={}
    this.hrService.documentName.imagefilename=null
    this.hrService.GetAllRole()
    this.hrService.GetAllDepartment()
    await this.hrService.GetAllEmployee()
    this.hrService.spinner.hide()

  }

  async AddEmp() {

    this.hrService.spinner.show()

    if(await this.CheckIban()){
      this.CreateUser()
    }
    else
    {
      this.tostar.error("The iban dose not exist in the Bank Make sure to enter the right IBAN")
    }
    this.hrService.spinner.hide()

  }

  async CreateUser(){
    if (this.hrService.documentName.imagefilename !== null && this.hrService.documentName.imagefilename !== undefined && this.hrService.documentName.imagefilename !== '') {
      this.empInfoForm.value.imagefilename = this.hrService.documentName.imagefilename
    }
    await this.hrService.AddEmpProfile(this.empInfoForm.value)
    this.empInfoForm.reset()
    this.empInfoForm.markAsUntouched()
    this.hrService.documentName.imagefilename = undefined
    history.back()

  }

  async CheckIban(){
   await this.hrService.GetAllIban()
    let iban=this.hrService.allIban.find((b:any)=>b.iban==this.empInfoForm.value.bankinfoid)
    if(iban==null)
    return false
    else
    return true
  }

  async UploadPhoto(file: any) {
    this.hrService.spinner.show()

    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrService.UploadDocument(formData)
    this.hrService.spinner.hide()

  }

}

