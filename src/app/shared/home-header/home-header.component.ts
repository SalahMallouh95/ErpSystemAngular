import { Component } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})

export class HomeHeaderComponent {
constructor(public hrService:HrService){}
token:any
user:any
async ngOnInit(){
this.hrService.GetAbout()
this.token=localStorage.getItem('token')
this.user=JSON.parse(localStorage.getItem('userInfo')+'') 
this.user.roleid=parseInt(this.user.roleid)

}

}
