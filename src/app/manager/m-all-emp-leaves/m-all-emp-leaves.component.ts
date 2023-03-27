import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MLeaveDetailsComponent } from '../m-leave-details/m-leave-details.component';
import { AuthService } from 'src/app/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-m-all-emp-leaves',
  templateUrl: './m-all-emp-leaves.component.html',
  styleUrls: ['./m-all-emp-leaves.component.css']
})
export class MAllEmpLeavesComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService,private router:Router, public managerService : ManagerService , public dialog : MatDialog,private auth : AuthService){



  }

  leaves : any ={}
  id : number = this.auth.systemUserInfo.userid

  ngOnInit(){

this.spinner.show()
    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp          
    this.managerService.GetAllLeaves(userData)
    
    this.spinner.hide()
  }

  range = new FormGroup({
   
    dateTo: new FormControl<Date | null>(null),
    dateFrom: new FormControl<Date | null>(null)
  });

  async Search(){
    
    await this.managerService.Searchs(this.range.value)
  }


  async GetValues(id :any){
    let leave : any = {}
    leave.leaveid = id
   await this.managerService.GetLeaveDetails(leave)
    this.OpenMoreInfoDialog()
   
    
  }

  OpenMoreInfoDialog(){
    this.dialog.open(MLeaveDetailsComponent)
  }



}
