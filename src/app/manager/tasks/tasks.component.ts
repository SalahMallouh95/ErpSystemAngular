import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  
  @ViewChild('DeleteDio') Deletedia:any
  constructor(public man: ManagerService , private route: Router,private auth : AuthService,public dialog:MatDialog){

  }

tas :any = {}
id : number =  this.auth.systemUserInfo.userid

 async ngOnInit() {
    
  let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp          
    await this.man.GetAllTasks(userData)
    this.tas=this.man.AllTasks.filter((l: { userid: number; })=>l.userid==2)

    console.log(this.man.AllTasks);

  
    
}



async GetValues(id :any){
  this.man.spinner.show()
let task : any = {}
task.taskid = id
await this.man.GetTaskDetails(task)
await this.man.GetAllSolutions(task)
this.route.navigate(['Manager/TaskSolution']);
this.man.spinner.hide()
}

async GetEditValues(id :any){
  this.man.spinner.show()
  let task : any = {}
  task.taskid = id
  await this.man.GetTaskDetails(task)
  await this.man.GetAllSolutions(task)
    
  this.route.navigate(['/Manager/EditTask',id])
  this.man.spinner.hide()
  }

  task : any = {}

async deletetask(id:any){
  
  this.task.taskid = id
  await this.man.GetTaskDetails(this.task)
  await this.man.DeleteTask(id)

  let user : any ={}
  user.userid = this.id
  await this.man.GetAllTasks(user)
  
}

OpenDeleteDialog(id:any){
  this.man.spinner.show()
  this.task.taskid=id
  this.dialog.open(this.Deletedia);
  this.man.spinner.hide()
 }

}
