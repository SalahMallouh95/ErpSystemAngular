import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor( public man : ManagerService, private route: Router,public hr : HrService ){

  }

  ngOnInit(){
    let user : any = {}
    user.userid =2
    this.man.GetAllEmp(user)
  }

  taskform =  new FormGroup({

    userid : new FormControl(),
    managerid : new FormControl(2),
    uploaddate : new FormControl(),
    documentfilename : new FormControl(),
    taskname : new FormControl(),
    taskdescription : new FormControl()

    
  })

  async AddTask(){

    
    this.taskform.value.userid = parseInt(this.taskform.value.userid)
    this.taskform.value.documentfilename = this.hr.documentName.imagefilename
    await this.man.CreateTask(this.taskform.value)
    this.taskform.reset()
    this.hr.documentName.imagefilename = undefined
  }

  async UploadTaskFile(file : any){

    let formData = new FormData()
    formData.append('file', file.files[0])
    await this.hr.UploadDocument(formData)
  }
  















}
