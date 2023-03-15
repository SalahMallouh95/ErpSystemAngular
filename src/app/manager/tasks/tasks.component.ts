import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(public man: ManagerService , private route: Router){

  }

tas :any = {}
id : number = 2

ngOnInit() {
    this.tas.userid = this.id
    this.man.GetAllTasks(this.tas)
}
SendSelecterTaskId(id :any){
  this.route.navigate(['Manager/TaskDetails',id]);
  
  
}


SendSelecterSolutionId(id :any){
  this.route.navigate(['Manager/TaskSolution',id]);
  
  
}



}
