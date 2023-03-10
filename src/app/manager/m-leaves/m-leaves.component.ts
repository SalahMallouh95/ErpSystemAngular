import { Component } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-leaves',
  templateUrl: './m-leaves.component.html',
  styleUrls: ['./m-leaves.component.css']
})
export class MLeavesComponent {

  constructor(public managerserv : ManagerService){

  }

  mLeaves = this.managerserv.myLeaves;

}
