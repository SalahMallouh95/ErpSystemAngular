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

tas :any[] = this.man.task

ngOnInit(): void {
    
}
GetValues(id :any){
  this.route.navigate(['Manager/AllTasks']);
  console.log(id);
  
}

}
