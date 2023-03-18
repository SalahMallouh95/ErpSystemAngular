import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MMyLeaveDetailsComponent } from '../m-my-leave-details/m-my-leave-details.component';


@Component({
  selector: 'app-m-leaves',
  templateUrl: './m-leaves.component.html',
  styleUrls: ['./m-leaves.component.css']
})
export class MLeavesComponent {

  constructor(public managerserv : ManagerService , private route : Router,public dialog : MatDialog){

  }

  managerLeaves : any = {}
  id : number =2
  
  ngOnInit()  {
    this.managerLeaves.userid = this.id
    this.managerserv.GetMyLeaves(this.managerLeaves)
  }

  async SendSelectorMyLeaveId(id : any){

    let leave : any = {}
    leave.leaveid = id
    await this.managerserv.GetLeaveDetails(leave)
    this.OpenMoreInfoDialog()

  }

  OpenMoreInfoDialog(){
    this.dialog.open(MMyLeaveDetailsComponent)
  }

}
