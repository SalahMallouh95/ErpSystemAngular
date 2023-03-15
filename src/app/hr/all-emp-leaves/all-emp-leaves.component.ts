import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import {FormGroup, FormControl} from '@angular/forms';





@Component({
  selector: 'app-all-emp-leaves',
  templateUrl: './all-emp-leaves.component.html',
  styleUrls: ['./all-emp-leaves.component.css']
})
export class AllEmpLeavesComponent implements OnInit {
  
  constructor(private router:Router,public hrService:HrService)
  {

  }  
  range = new FormGroup({
    startdate: new FormControl<Date | null>(null),
    enddate: new FormControl<Date | null>(null),
    ssn:new FormControl
  });

  ngOnInit(): void {
    this.hrService.GetAllLeaves();
    
  }
  GetValues(id :any){
    this.router.navigate(['Hr/LeaveDetails',id]);
  }
  

  async Search(){
    
    await this.hrService.Search(this.range.value)
    //if(this.range.)
  }
}
