import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(public man: ManagerService , private route: Router,private auth : AuthService){

  }

tas :any = {}
id : number =  this.auth.systemUserInfo.userid

 async ngOnInit() {
    
  let user : any ={}
  user.userid = this.id
    await this.man.GetAllTasks(user)
    this.tas=this.man.AllTasks.filter((l: { userid: number; })=>l.userid==2)
    

  
    
}



async GetValues(id :any){
let task : any = {}
task.taskid = id
await this.man.GetTaskDetails(task)
await this.man.GetAllSolutions(task)
this.route.navigate(['Manager/TaskSolution']);
}

async GetEditValues(id :any){
  let task : any = {}
  task.taskid = id
  await this.man.GetTaskDetails(task)
  await this.man.GetAllSolutions(task)
    
  this.route.navigate(['/Manager/EditTask',id])

  }



async deletetask(id:any){
  let task : any = {}
  task.taskid = id
  await this.man.GetTaskDetails(task)
  await this.man.DeleteTask(id)

  let user : any ={}
  user.userid = this.id
  await this.man.GetAllTasks(user)
  
}

}
