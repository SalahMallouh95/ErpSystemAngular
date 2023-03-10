import { Component } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-all-emp-leaves',
  templateUrl: './m-all-emp-leaves.component.html',
  styleUrls: ['./m-all-emp-leaves.component.css']
})
export class MAllEmpLeavesComponent {

  constructor( public managerService : ManagerService ){



  }

  mAllLeaves = this.managerService.allLeaves
}
