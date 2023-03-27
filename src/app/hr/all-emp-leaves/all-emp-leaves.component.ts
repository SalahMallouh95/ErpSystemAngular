import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import {FormGroup, FormControl} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-all-emp-leaves',
  templateUrl: './all-emp-leaves.component.html',
  styleUrls: ['./all-emp-leaves.component.css']
})
export class AllEmpLeavesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator|any;
  displayedColumns: string[] = ['ssn', 'fname', 'lname','start','end','state','Action'];
  dataSource :any

  @ViewChild('infoDio') Infodia:any


  constructor(public dialog:MatDialog,private router:Router,public hrService:HrService,private spinner: NgxSpinnerService)
  {

  }  
  range = new FormGroup({
    dateTo: new FormControl<Date | null>(null),
    dateFrom: new FormControl<Date | null>(null),
    ssn:new FormControl
  });

  async ngOnInit() {
    this.hrService.spinner.show()

    await this.hrService.GetAllLeaves();
    this.dataSource= new MatTableDataSource(this.hrService.allLeaves);
    this.dataSource.paginator = this.paginator;
    this.hrService.spinner.hide()

    
  }
  async GetValues(id :any){
    this.hrService.spinner.show()

    let leave :any={}
        leave.leaveid=id
    await this.hrService.GetLeaveDetails(leave)
    this.hrService.spinner.hide()

    this.OpenMoreInfoDialog();
  }
  

  async Search(){
    this.hrService.spinner.show()

    await this.hrService.Search(this.range.value)
    this.dataSource= new MatTableDataSource(this.hrService.allLeaves);
    this.dataSource.paginator = this.paginator;
    
    this.hrService.spinner.hide()

  }

  OpenMoreInfoDialog(){
    this.dialog.open(this.Infodia)
  }


  async AcceptLeave() {
    this.hrService.spinner.show()

    let leave: any = {}
    leave.leaveid = this.hrService.leaveInfo.leaveid
    leave.state = 1
    await this.hrService.UpdateLeaveDetails(leave)
    this.hrService.GetLeaveDetails(leave)
    await this.hrService.GetAllLeaves()
    this.dataSource= new MatTableDataSource(this.hrService.allLeaves);
    this.dataSource.paginator = this.paginator;
    this.hrService.spinner.hide()


  }

  async RejectLeave() {
    this.hrService.spinner.show()

    let leave: any = {}
    leave.leaveid = this.hrService.leaveInfo.leaveid
    leave.state = 0
    await this.hrService.UpdateLeaveDetails(leave)
    this.hrService.GetLeaveDetails(leave)
    await this.hrService.GetAllLeaves()

    this.dataSource= new MatTableDataSource(this.hrService.allLeaves);
    this.dataSource.paginator = this.paginator;

    this.hrService.spinner.hide()

  }
}
