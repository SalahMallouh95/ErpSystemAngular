import { Component } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-hr-sidebar',
  templateUrl: './hr-sidebar.component.html',
  styleUrls: ['./hr-sidebar.component.css']
})
export class HrSidebarComponent {
  leaveCount:number=0
  TotalMessages:number=0

  constructor(public hrService:HrService){}
  async ngOnInit(){
    await this.hrService.GetAllLeaves()
    await this.hrService.GetContactMessages()
    this.leaveCount=this.hrService.allLeaves.filter((e:any)=>e.state==2).length
    this.TotalMessages=this.hrService.contactMessages.length
  }

}
