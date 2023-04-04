import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { AuthService } from 'src/app/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(private spinner: NgxSpinnerService, public man : ManagerService, private route: Router,public hr : HrService,private auth : AuthService, private toaster: ToastrService ){

  }

  userData:any = this.auth.getdata()

  ngOnInit(){
   
    this.spinner.show()
    this.man.GetAllEmp(this.userData)
    this.hr.documentName = {}
    this.hr.documentName.imagefilename = null
    this.spinner.hide()
  }

  taskform =  new FormGroup({
    userid : new FormControl('',Validators.required) ,
    taskid: new FormControl,
    managerid : new FormControl(),
    documentfilename : new FormControl(),
    taskname : new FormControl('',Validators.required),
    taskdescription : new FormControl()

    
  })

  async AddTask(){
    this.spinner.show()
    this.taskform.value.managerid = this.userData.userid
    this.taskform.value.documentfilename = this.hr.documentName.imagefilename
    
    await this.man.CreateTask(this.taskform.value)
    this.taskform.reset()
    this.hr.documentName.imagefilename = undefined
    this.spinner.hide()
  }

  async UploadTaskFile(file : any){
    this.spinner.show()
    let formData = new FormData()
    formData.append('file', file.files[0])
    await this.hr.UploadDocument(formData)
    this.spinner.hide()
  }
  



  async SendEmail() {
    this.spinner.show()
    let mail: any = {}
    await this.man.GetEmpInfo(this.taskform.value.userid)
    
    
    
    

    mail.to = this.man.empInformation.email;
    mail.subject = "New Task"
    
      mail.message = "Dear Mr/Mis "
        + this.man.empInformation.fname + " " + this.man.empInformation.lname + "\nI hope this find you well \n please check the company site: " +
        ".\n best wishes\n" + this.auth.systemUserInfo.rolename + " : " + this.auth.systemUserInfo.fname + " " + this.auth.systemUserInfo.lname;
   
    this.auth.SendMail(mail)
    this.toaster.success("Email Sended")
    this.spinner.hide()
  }











}
