import { Component } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-hr-tree',
  templateUrl: './hr-tree.component.html',
  styleUrls: ['./hr-tree.component.css']
})
export class HrTreeComponent {
  constructor(public hrService:HrService){

  }

  async ngOnInit(){
   await this.hrService.GetAllEmployee()
  }

}
