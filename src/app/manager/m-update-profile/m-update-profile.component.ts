import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { async } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-update-profile',
  templateUrl: './m-update-profile.component.html',
  styleUrls: ['./m-update-profile.component.css']
})
export class MUpdateProfileComponent {

  constructor(public man: ManagerService, public hr: HrService, private auth: AuthService) {


  }

  manInfo = new FormGroup({

    userid: new FormControl(),
    fname: new FormControl({ value: '', disabled: true }, Validators.required),
    lname: new FormControl({ value: '', disabled: true }, Validators.required),
    password: new FormControl(),
    phonenumber: new FormControl(),
    address: new FormControl(),
    imagefilename: new FormControl(),
    salary: new FormControl({ value: '', disabled: true }, Validators.required),
    bankinfoid: new FormControl({ value: '', disabled: true }, Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    ssn: new FormControl({ value: '', disabled: true }, Validators.required),
    rolename: new FormControl({ value: '', disabled: true }, Validators.required)

  })



  emp: any = { "userid": null }

  async ngOnInit() {

    this.man.spinner.show()
    let data = JSON.parse(localStorage.getItem("fullUserInfo") + '')
    this.emp.userid = this.auth.systemUserInfo.userid
    await this.man.GetManagerPrifile(this.emp)
    await this.manInfo.patchValue(this.man.ManagerProfile)
    this.man.spinner.hide()
  }


  async UploadPhoto(file: any) {
    let formData = new FormData()
    console.log(file);
    formData.append('file', file.files[0])
    await this.hr.UploadDocument(formData)
    this.manInfo.value.imagefilename = this.hr.documentName.imagefilename
  }

  async UpdateProf() {
    await this.man.Updateprofile(this.manInfo.value)
    console.log(this.manInfo.value);
    this.man.GetManagerPrifile(this.emp)


  }

}
