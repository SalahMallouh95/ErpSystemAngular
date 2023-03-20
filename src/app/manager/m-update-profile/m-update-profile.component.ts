import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-update-profile',
  templateUrl: './m-update-profile.component.html',
  styleUrls: ['./m-update-profile.component.css']
})
export class MUpdateProfileComponent {

  constructor(public man : ManagerService, public hr : HrService){


  }

  manInfo = new FormGroup({

    userid : new FormControl(),
    managerid : new FormControl(),
    fname : new FormControl({value: '', disabled: true}, Validators.required),
    lname : new FormControl({value: '', disabled: true}, Validators.required),
    salary : new FormControl({value: '', disabled: true}, Validators.required),
    bankinfoid : new FormControl(),
    email : new FormControl({value: '', disabled: true}, Validators.required),
    departmentname : new FormControl({value: '', disabled: true}, Validators.required),
    phonenumber : new FormControl(),
    imagefilename : new FormControl(),
    ssn : new FormControl({value: '', disabled: true}, Validators.required),
    password : new FormControl(),
    rolename :  new FormControl({value: '', disabled: true}, Validators.required),
    address : new FormControl()
  })



  emp : any = {}
  id: number =2

  ngOnInit(){

    this.emp.userid = this.id
    this.man.GetManagerPrifile(this.emp)
    this.manInfo.patchValue(this.man.ManagerProfile)
    
  }


  async UploadPhoto(file : any){

    let formData = new FormData()
    console.log(file);

    formData.append('file', file.files[0])
    await this.hr.UploadDocument(formData)
    this.manInfo.value.imagefilename = this.hr.documentName.imagefilename


    

  }

}
