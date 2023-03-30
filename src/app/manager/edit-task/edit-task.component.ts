import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { AuthService } from 'src/app/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  constructor(private spinner: NgxSpinnerService, public man :ManagerService , private route: Router , private rou: ActivatedRoute, public hr: HrService,private auth : AuthService ){

  }

  editTaskform =  new FormGroup({
    taskid : new FormControl(),
    userid : new FormControl(),
    state : new FormControl(),
    documentfilename : new FormControl(),
    taskname : new FormControl(),
    taskdescription : new FormControl()
  })

  

  ngOnInit(): void {

    this.spinner.show()
    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp          
    this.man.GetAllEmp(userData)
    this.editTaskform.patchValue(this.man.taskinfo)
    
    
    this.hr.documentName = {}
    this.hr.documentName.imagefilename = null

   this.spinner.show()
   }

   async UpdateT(){
    this.spinner.show()
    this.editTaskform.value.userid = parseInt(this.editTaskform.value.userid)
    this.editTaskform.value.taskid = parseInt(this.editTaskform.value.taskid)
    this.editTaskform.value.documentfilename = this.hr.documentName.imagefilename

    await this.man.UpdateTask(this.editTaskform.value)
    this.editTaskform.reset()
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
