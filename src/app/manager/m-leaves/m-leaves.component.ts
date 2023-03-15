import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-leaves',
  templateUrl: './m-leaves.component.html',
  styleUrls: ['./m-leaves.component.css']
})
export class MLeavesComponent {

  constructor(public managerserv : ManagerService , private route : Router){

  }

  managerLeaves : any = {}
  id : number =2

  ngOnInit()  {
    this.managerLeaves.userid = this.id
    this.managerserv.GetMyLeaves(this.managerLeaves)
  }

  SendSelectorMyLeaveId(id : any){

    this.route.navigate(['Manager/MyLeaveDetails',id])

  }

}
