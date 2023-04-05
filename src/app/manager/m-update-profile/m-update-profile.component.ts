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

  constructor(public man: ManagerService, public hr: HrService, public auth: AuthService) {


  }

  manInfo = new FormGroup({

    userid: new FormControl('',Validators.required),
    fname: new FormControl('',Validators.required),
    lname: new FormControl(),
    phonenumber: new FormControl(),
    address: new FormControl(),
    imagefilename: new FormControl(),
    salary: new FormControl({ value: '', disabled: true }, Validators.required),
    bankinfoid: new FormControl({ value: '', disabled: true }, Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    ssn: new FormControl({ value: '', disabled: true }, Validators.required),
    rolename: new FormControl({ value: '', disabled: true }, Validators.required)
  })


  flag = true
  emp: any = { "userid": null }

  async ngOnInit() {

    this.man.spinner.show()
    let data = this.auth.getdata()
    this.emp.userid = data.userid
    await this.man.GetManagerPrifile(this.emp)
    this.flag= false
    this.manInfo.patchValue(this.man.ManagerProfile)
    
    this.man.spinner.hide()
  }


  async UploadPhoto(file: any) {
    let formData = new FormData()
    formData.append('file', file.files[0])
    await this.hr.UploadDocument(formData)
    this.manInfo.value.imagefilename = this.hr.documentName.imagefilename
  }

  async UpdateProf() {
    await this.man.Updateprofile(this.manInfo.value)
    this.man.GetManagerPrifile(this.emp)
  }

  async ChangePassword(){
    let user:any={}
    user.useridnumber=this.manInfo.value.userid
    await this.auth.CreatePassString(user)
    await this.SendEmail()
    this.auth.toastr.success("Email for reset your password was sent yo your email")
  }

  async SendEmail(){    
    let mail:any={}
      mail.to=this.auth.systemUserInfo.email
      mail.subject="Reset Password"
      mail.message="Dear Mr/Mis "
      +this.manInfo.value.fname+" "+this.manInfo.value.lname+"\nI hope this find you well \n you can reset Your password using the link below "+
    
      "http://localhost:4200/Auth/passwordReset/"+this.auth.userResetPasswordInfo.passwordparam
      +" \n please don't share the link with anyone\n"+
      +" \n best wishes \n StartUp";      
      this.auth.SendMail(mail)  
  }

}
