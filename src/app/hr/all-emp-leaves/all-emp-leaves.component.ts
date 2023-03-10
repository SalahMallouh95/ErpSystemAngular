import { Component, OnInit } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-all-emp-leaves',
  templateUrl: './all-emp-leaves.component.html',
  styleUrls: ['./all-emp-leaves.component.css']
})
export class AllEmpLeavesComponent implements OnInit {
  
  constructor(public hrService:HrService)
  {

  }

  s=this.hrService.mesage
  allLeavesList :any []=this.hrService.allLeaves
  ngOnInit(): void {
    
  }
  GetDate(){
    console.log("x")
  }
  

}
