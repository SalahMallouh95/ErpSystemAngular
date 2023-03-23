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
  constructor(public man : ManagerService, public hr : HrService,private auth:AuthService){


  }

  manInfo = new FormGroup({

    userid : new FormControl(),
    fname : new FormControl({ value: '',disabled: true}, Validators.required),
    lname : new FormControl({value: '', disabled: true}, Validators.required),
    password : new FormControl(),
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
  

  ngOnInit(){

    this.emp.userid = this.auth.systemUserInfo.userid
    this.man.GetManagerPrifile(this.emp)
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

}
