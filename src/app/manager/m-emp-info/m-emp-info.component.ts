import { Component } from '@angular/core';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-emp-info',
  templateUrl: './m-emp-info.component.html',
  styleUrls: ['./m-emp-info.component.css']
})
export class MEmpInfoComponent {

    constructor(public man: ManagerService){

    }

    info = this.man.empInfo

}
