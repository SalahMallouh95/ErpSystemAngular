import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {
  constructor(public hrservice:HrService,private route:ActivatedRoute){
  }
  
  ngOnInit(): void {
   
    
      }


      async AcceptLeave()
      {
        let leave :any={}
        leave.leaveid=this.hrservice.leaveInfo.leaveid
        leave.state=1    
       await this.hrservice.UpdateLeaveDetails(leave)
       await this.hrservice.GetLeaveDetails(leave)

      }

      async RejectLeave()
      {
        let leave :any={}
        leave.leaveid=this.hrservice.leaveInfo.leaveid
        leave.state=0        
        await this.hrservice.UpdateLeaveDetails(leave)
        await this.hrservice.GetLeaveDetails(leave)

 
      }
}
