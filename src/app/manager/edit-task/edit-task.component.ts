import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  constructor( public man :ManagerService , private route: Router , private rou: ActivatedRoute ){

  }

  id : number | undefined
  tas : any | {}

 ngOnInit(): void {
  this.id = this.rou.snapshot.params['id'];
  this.tas = this.man.task.filter( t => t.tid == this.id )
 }

  GetValues(id : any){

    console.log(id);
    
  }

}
