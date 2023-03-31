import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  empCount: any
  empOnCount: any
  empOfCount: any
  tasks: any
  leaves: any
  penleaves: any
  taskWorkingon: any
  emplist:any
  ssn:number|undefined



  constructor(public hrService: HrService, private auth: AuthService, public man: ManagerService,private route :Router) { }

  async ngOnInit() {

    this.man.spinner.show()
    let userData: any =this.auth.getdata()
    await this.hrService.GetEmpInfo(userData)
    this.auth.systemUserInfo = this.hrService.empInfo

    await this.man.GetAllEmp(userData)
    await this.man.GetAllLeaves(userData)
    await this.man.GetAllTasks(userData)

    this.emplist = this.man.AllEmp

    this.empCount = this.man.AllEmp.length
    this.empOnCount = this.man.AllEmp.filter((e: any) => e.state == 1).length
    this.empOfCount = this.man.AllEmp.filter((e: any) => e.state == 0).length
    this.tasks = this.man.AllTasks.length
    this.leaves = this.man.allLeaves.length
    this.penleaves = this.man.allLeaves.filter((l: any) => l.state == 2).length
    this.taskWorkingon = this.man.AllTasks.filter((t: any) => t.state == 2 || t.state == 0).length
    await this.hrService.GetAllNews()
    this.hrService.OneNews = await this.hrService.AllNews[0]
    this.man.spinner.hide()
  }

  async GetValues(ide:any){
    this.man.spinner.show()
    let att : any ={}
    att.userid = ide
    await this.man.GetEmpInfo(ide)
    await this.man.GetAttendance(att)
    this.route.navigate(['Manager/EmpInfo']);
    this.man.spinner.hide()
  }

  FiliterByssn(){
    this.man.spinner.show()
    if(this.ssn==null)
    {
      this.emplist = this.man.AllEmp.filter((e: any) => e.userid != this.auth.systemUserInfo.userid && e.roleid==3) 
    }
    else
    {
      this.emplist = this.man.AllEmp.filter((e: any) => e.ssn == this.ssn && e.roleid==3) 
    }
    this.man.spinner.hide()
  }

}
