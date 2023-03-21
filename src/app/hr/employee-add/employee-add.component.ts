import { Component } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  ssnList: any = []




  empInfoForm = new FormGroup({
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phonenumber: new FormControl(),
    address: new FormControl(),
    salary: new FormControl(),
    ssn: new FormControl('', [Validators.required, notInListValidator(this.ssnList)]),
    roleid: new FormControl('', Validators.required),
    departmentid: new FormControl('', Validators.required),
    bankinfoid: new FormControl('', Validators.required),
    imagefilename: new FormControl('UserDefaultImage.png', { nonNullable: true }),

  })

  constructor(public hrservice: HrService) {

  }

  async ngOnInit(): Promise<void> {
    this.hrservice.GetAllRole()
    this.hrservice.GetAllDepartment()
    await this.hrservice.GetAllEmployee()
    this.ssnList = this.hrservice.allEmp.map((s: { ssn: any; }) => s.ssn)
    console.log(this.ssnList);
    console.log(this.hrservice.allEmp);

  }

  async AddEmp() {

    if (this.hrservice.documentName.imagefilename != null || this.hrservice.documentName.imagefilename != undefined || this.hrservice.documentName.imagefilename != '') {
      this.empInfoForm.value.imagefilename = this.hrservice.documentName.imagefilename
    }
    await this.hrservice.AddEmpProfile(this.empInfoForm.value)
    this.empInfoForm.reset()
    this.empInfoForm.markAsUntouched()
    this.hrservice.documentName.imagefilename = undefined
    history.back()


  }

  async UploadPhoto(file: any) {
    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrservice.UploadDocument(formData)

  }

}

function notInListValidator(list: any[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (list.includes(value)) {
      return { notInList: true };
    }
    return null;
  };
}