
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
  leaveInfo:any|{}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.leaveInfo=this.managerService.allLeaves.filter((lev)=>lev.leaveid==this.id )
    
  }
}
