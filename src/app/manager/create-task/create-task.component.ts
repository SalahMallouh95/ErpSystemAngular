import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor( public man : ManagerService, private route: Router,public hr : HrService,private auth : AuthService ){

  }

  userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   

  ngOnInit(){
   
    this.userData.userid=parseInt (this.userData.userid)   
    this.userData.roleid=parseInt (this.userData.roleid)        
    delete this.userData.exp   
    this.man.GetAllEmp(this.userData)
  }

  taskform =  new FormGroup({
    userid : new FormControl(),
    taskid: new FormControl,
    managerid : new FormControl(),
    documentfilename : new FormControl(),
    taskname : new FormControl(),
    taskdescription : new FormControl()

    
  })

  async AddTask(){

    
    
    this.taskform.value.userid = parseInt(this.taskform.value.userid)

    this.taskform.value.managerid = this.userData.userid
    this.taskform.value.documentfilename = this.hr.documentName.imagefilename
    console.log(this.taskform.value);
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
