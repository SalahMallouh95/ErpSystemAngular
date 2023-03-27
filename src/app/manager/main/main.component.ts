import { Component } from '@angular/core';
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

  
  


constructor(public hrService:HrService,private auth:AuthService, public man: ManagerService){}

async ngOnInit(){
  
    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp          
    await this.hrService.GetEmpInfo(userData)
    this.auth.systemUserInfo=this.hrService.empInfo    

    await this.man.GetAllEmp(userData)
    await this.man.GetAllLeaves(userData)
    await this.man.GetAllTasks(userData)

    this.empCount = this.man.AllEmp.length
    this.empOnCount = this.man.AllEmp.filter((e:any)=> e.state == 1 ).length
    this.empOfCount = this.man.AllEmp.filter((e:any)=> e.state == 0 ).length
    this.tasks = this.man.AllTasks.length
    this.leaves = this.man.allLeaves.length
    this.penleaves = this.man.allLeaves.filter((l:any) => l.state == 2).length
    this.taskWorkingon = this.man.AllTasks.filter((t:any) => t.state == 2 || t.state==0).length




  }




}
