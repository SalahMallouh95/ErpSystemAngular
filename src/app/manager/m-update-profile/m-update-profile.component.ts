import { Component } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-update-profile',
  templateUrl: './m-update-profile.component.html',
  styleUrls: ['./m-update-profile.component.css']
})
export class MUpdateProfileComponent {

  constructor(public man : ManagerService){


  }

  emp : any = {}
  id: number =2

  ngOnInit(){

    this.emp.userid = this.id
    this.man.GetManagerPrifile(this.emp)
  }


}
