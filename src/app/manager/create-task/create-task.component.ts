import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { AuthService } from 'src/app/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(private spinner: NgxSpinnerService, public man : ManagerService, private route: Router,public hr : HrService,private auth : AuthService ){

  }

  userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   

  ngOnInit(){
   
    this.spinner.show()
    this.userData.userid=parseInt (this.userData.userid)   
    this.userData.roleid=parseInt (this.userData.roleid)        
    delete this.userData.exp   
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
    console.log(this.taskform.value);
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
  















}
