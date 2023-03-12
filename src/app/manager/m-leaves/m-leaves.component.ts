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

  mLeaves : any | undefined

  ngOnInit() : void {
    this.mLeaves = this.managerserv.myLeaves.filter( m => m.userid ==1)
  }

  SendSelectorMyLeaveId(id : any){

    this.route.navigate(['Manager/MyLeaveDetails',id])

  }

}
