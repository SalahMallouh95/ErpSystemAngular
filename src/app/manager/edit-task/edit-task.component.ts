import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  constructor( public man :ManagerService , private route: Router , private rou: ActivatedRoute, public hr: HrService ){

  }

  editTaskform =  new FormGroup({
    taskid : new FormControl(),
    userid : new FormControl(),
    uploaddate : new FormControl(),
    state : new FormControl(),
    documentfilename : new FormControl(),
    taskname : new FormControl(),
    taskdescription : new FormControl()
  })

  

  ngOnInit(): void {
    let user : any = {}
    user.userid =2
    this.man.GetAllEmp(user)
    this.editTaskform.patchValue(this.man.taskinfo)
    console.log(this.man.taskinfo);
    

   
   }

   async UpdateT(){
    this.editTaskform.value.userid = parseInt(this.editTaskform.value.userid)
    this.editTaskform.value.taskid = parseInt(this.editTaskform.value.taskid)
    this.editTaskform.value.documentfilename = this.hr.documentName.imagefilename

    await this.man.UpdateTask(this.editTaskform.value)
    this.editTaskform.reset()
    this.hr.documentName.imagefilename = undefined
  }

  async UploadTaskFile(file : any){

    let formData = new FormData()
    formData.append('file', file.files[0])
    await this.hr.UploadDocument(formData)
  }








}
