import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import {FormGroup, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-all-emp-leaves',
  templateUrl: './all-emp-leaves.component.html',
  styleUrls: ['./all-emp-leaves.component.css']
})
export class AllEmpLeavesComponent implements OnInit {
  
  constructor(private router:Router,public hrService:HrService,private datePipe: DatePipe)
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
    const startDate = this.range.get('startdate')?.value;
    const endDate = this.range.get('enddate')?.value;
    
    const formattedStartDate = this.datePipe.transform(startDate, 'yyyy/MM/dd HH:mm:ss');
    const formattedEndDate = this.datePipe.transform(endDate, 'yyyy/MM/dd HH:mm:ss');

    // Use the formatted start and end dates in your search logic
    console.log(formattedStartDate, formattedEndDate);
    await this.hrService.Search(this.range.value)
  }
}
