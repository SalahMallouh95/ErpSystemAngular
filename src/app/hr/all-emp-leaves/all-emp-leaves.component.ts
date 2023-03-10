import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-all-emp-leaves',
  templateUrl: './all-emp-leaves.component.html',
  styleUrls: ['./all-emp-leaves.component.css']
})
export class AllEmpLeavesComponent implements OnInit {
  
  constructor(private router:Router,public hrService:HrService)
  {

  }

  s=this.hrService.mesage
  allLeavesList :any []=this.hrService.allLeaves

  ngOnInit(): void {
    
  }
  GetValues(id :any){
    this.router.navigate(['Hr/LeaveDetails',id]);
  }
  

}
