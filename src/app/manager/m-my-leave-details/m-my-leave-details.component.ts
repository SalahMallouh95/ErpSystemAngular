import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-my-leave-details',
  templateUrl: './m-my-leave-details.component.html',
  styleUrls: ['./m-my-leave-details.component.css']
})
export class MMyLeaveDetailsComponent implements OnInit {


  constructor( public managerService : ManagerService,private route :ActivatedRoute ){

  }

  id : number | undefined
  leaveInfo : any | {}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id']
    this.leaveInfo = this.managerService.myLeaves.filter( l => l.leaveid == this.id )
  }

}