import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MMyLeaveDetailsComponent } from '../m-my-leave-details/m-my-leave-details.component';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';


@Component({
  selector: 'app-m-leaves',
  templateUrl: './m-leaves.component.html',
  styleUrls: ['./m-leaves.component.css']
})
export class MLeavesComponent {
  
  @ViewChild('DeleteDio') Deletedia:any
  constructor(public employeeService: EmployeeService,public managerserv : ManagerService , private route : Router,public dialog : MatDialog,private auth : AuthService){

  }

  managerLeaves : any = {}
  id : number =this.auth.systemUserInfo.userid
  
  async ngOnInit()  {
    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp          
   await this.managerserv.GetMyLeaves(userData)
  }

  leave : any = {}
  async SendSelectorMyLeaveId(id : any){

 
    this.leave.leaveid = id
    await this.managerserv.GetLeaveDetails(this.leave)
    this.OpenMoreInfoDialog()

  }

  OpenMoreInfoDialog(){
    this.dialog.open(MMyLeaveDetailsComponent)
  }


  

  async DeleteLeave( ) {
    
    await this.employeeService.DeleteLeave(this.managerserv.leaveInfo.leaveid)
    await this.managerserv.GetMyLeaves(this.managerLeaves)
  }

  OpenDeleteDialog(id:any){
    this.leave.leaveid = id
    this.managerserv.GetLeaveDetails(this.leave)
    this.dialog.open(this.Deletedia);
  
   }

}
