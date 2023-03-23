import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  constructor(private route :Router ,public managerService : ManagerService,private auth : AuthService ){

  }

user : any = {}
id : number = this.auth.systemUserInfo.userid



  async GetValues(ide:any){

    let att : any ={}
    att.userid = ide
  
    
    await this.managerService.GetEmpInfo(ide)
    
    await this.managerService.GetAttendance(att)

    this.route.navigate(['Manager/EmpInfo']);
    

    

    
  }



 ngOnInit(){


  this.user.userid = this.id
  this.managerService.GetAllEmp(this.user)
  
  
 }

}
