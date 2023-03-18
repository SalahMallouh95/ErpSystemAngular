
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';


@Component({
  selector: 'app-m-leave-details',
  templateUrl: './m-leave-details.component.html',
  styleUrls: ['./m-leave-details.component.css']
})
export class MLeaveDetailsComponent  implements OnInit {
  constructor(public managerService : ManagerService,private route:ActivatedRoute){
  }
  id:number|undefined
  leaveInf:any|{}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.leaveInf=this.managerService.allLeaves.filter((lev)=>lev.leaveid==this.id )
    console.log(this.leaveInf);
    
    
  }


  async AcceptLeave() {
    let leave: any = {}
    leave.leaveid = this.managerService.leaveInfo.leaveid
    leave.state = 1
    await this.managerService.UpdateLeaveDetails(leave)
    this.managerService.GetLeaveDetails(leave)
    this.managerService.GetAllLeaves(leave)

  }

  async RejectLeave() {
    let leave: any = {}
    leave.leaveid = this.managerService.leaveInfo.leaveid
    leave.state = 0
    await this.managerService.UpdateLeaveDetails(leave)
    this.managerService.GetLeaveDetails(leave)
    this.managerService.GetAllLeaves(leave)

  }


}
