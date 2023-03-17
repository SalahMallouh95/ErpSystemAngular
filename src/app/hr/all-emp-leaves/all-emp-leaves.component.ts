import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import {FormGroup, FormControl} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { LeaveDetailsComponent } from '../leave-details/leave-details.component';






@Component({
  selector: 'app-all-emp-leaves',
  templateUrl: './all-emp-leaves.component.html',
  styleUrls: ['./all-emp-leaves.component.css']
})
export class AllEmpLeavesComponent implements OnInit {
  
  constructor(public dialog:MatDialog,private router:Router,public hrService:HrService,private spinner: NgxSpinnerService)
  {

  }  
  range = new FormGroup({
    dateTo: new FormControl<Date | null>(null),
    dateFrom: new FormControl<Date | null>(null),
    ssn:new FormControl
  });

  ngOnInit(): void {
    this.hrService.GetAllLeaves();
    
  }
  async GetValues(id :any){

    let leave :any={}
        leave.leaveid=id
    await this.hrService.GetLeaveDetails(leave)
    this.OpenMoreInfoDialog();
  }
  

  async Search(){
    
    await this.hrService.Search(this.range.value)
  }

  OpenMoreInfoDialog(){
    this.dialog.open(LeaveDetailsComponent)
  }
}
