import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent {
  constructor(public man : ManagerService, public hr : HrService,public auth:AuthService){


  }

  manInfo = new FormGroup({

    userid : new FormControl(),
    fname : new FormControl({ value: '',disabled: true}, Validators.required),
    lname : new FormControl({value: '', disabled: true}, Validators.required),
    phonenumber : new FormControl(),
    address : new FormControl(),
    imagefilename : new FormControl(),
    salary : new FormControl({value: '', disabled: true}, Validators.required),
    bankinfoid : new FormControl({value: '', disabled: true}, Validators.required),
    email : new FormControl({value: '', disabled: true}, Validators.required),
    ssn : new FormControl({value: '', disabled: true}, Validators.required),
    rolename :  new FormControl({value: '', disabled: true}, Validators.required)
    
  })



  emp : any = {}
  
  userdata:any
  async ngOnInit(){
    this.userdata=this.auth.getdata()
    this.emp.userid = this.userdata.userid
    await this.man.GetManagerPrifile(this.emp)
    this.manInfo.patchValue(this.man.ManagerProfile)
    this.hr.documentName={}
    this.hr.documentName.imagefilename=null
  }


  async UploadPhoto(file : any){
    let formData = new FormData()
    console.log(file);
    formData.append('file', file.files[0])
    await this.hr.UploadDocument(formData)
  }

  async UpdateProf(){
    if(this.hr.documentName.imagefilename!=null && this.hr.documentName.imagefilename!=undefined && this.hr.documentName.imagefilename!='')
    this.manInfo.value.imagefilename = this.hr.documentName.imagefilename
    await this.man.Updateprofile(this.manInfo.value)
    console.log(this.manInfo.value);
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
