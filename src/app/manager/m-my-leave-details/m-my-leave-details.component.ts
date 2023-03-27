import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-my-leave-details',
  templateUrl: './m-my-leave-details.component.html',
  styleUrls: ['./m-my-leave-details.component.css']
})
export class MMyLeaveDetailsComponent implements OnInit {


  constructor(private spinner: NgxSpinnerService, public managerService : ManagerService,private route :ActivatedRoute,private auth : AuthService ){

  }

  id : number | undefined
  leaveInfo : any | {}

  ngOnInit(): void {
    this.spinner.show()
    this.id = this.auth.systemUserInfo.userid
    this.leaveInfo = this.managerService.myLeaves.filter( l => l.leaveid == this.id )
    this.spinner.hide()
  }

}
