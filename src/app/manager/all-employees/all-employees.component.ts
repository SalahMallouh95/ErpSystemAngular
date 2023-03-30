import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  constructor(private spinner: NgxSpinnerService,private route :Router ,public managerService : ManagerService,private auth : AuthService ){
  }
 userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
  async GetValues(ide:any){
    this.spinner.show()
    let att : any ={}
    att.userid = ide
    await this.managerService.GetEmpInfo(ide)
    await this.managerService.GetAttendance(att)
    this.route.navigate(['Manager/EmpInfo']);
    this.spinner.hide()
  }



 async ngOnInit(){
  this.spinner.show()
  this.userData.userid=parseInt (this.userData.userid) 
  this.userData.roleid=parseInt (this.userData.roleid)  
  delete this.userData.exp 
  await this.managerService.GetAllEmp(this.userData)
  this.emplist = this.managerService.AllEmp
  this.spinner.hide()
 }


 ssn:number|undefined
  emplist:any

 FiliterByssn(){
  this.spinner.show()
  if(this.ssn==null)
  {
    this.emplist = this.managerService.AllEmp.filter((e: any) => e.userid != this.auth.systemUserInfo.userid && e.roleid==3) 
  }
  else
  {
    this.emplist = this.managerService.AllEmp.filter((e: any) => e.ssn == this.ssn && e.roleid==3) 
  }
  this.spinner.hide()
}

}
