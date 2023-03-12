import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-tasks-detailes',
  templateUrl: './tasks-detailes.component.html',
  styleUrls: ['./tasks-detailes.component.css']
})
export class TasksDetailesComponent implements OnInit{

  constructor(public man:ManagerService, private route: ActivatedRoute,private rou : Router){

  }

  id: number|undefined
  taskInfo : any | {}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ;
    this.taskInfo = this.man.task.filter( t =>t.tid == this.id )
  }

  SendSelectorEditTaskId(id:any){

    this.rou.navigate(['Manager/EditTask',id])


  }

}
