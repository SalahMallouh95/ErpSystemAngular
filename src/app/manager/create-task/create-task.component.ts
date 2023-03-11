import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor( public man : ManagerService, private route: Router ){


  }

tas = this.man.tasks

GetValues(id:any){

  

  console.log(id);
  
}

}
