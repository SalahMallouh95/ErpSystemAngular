import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  empCount:any
  empOnCount:any
  empOfCount:any
  manCount:any
  DepCount:any

  constructor(public hrService:HrService,private auth:AuthService)
  {

  }

 async ngOnInit(){
    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp                  
    localStorage.setItem('fullUserInfo',JSON.stringify(this.hrService.empInfo))    
    await this.hrService.GetAllEmployee()
    await this.hrService.GetAllDepartment()
    await this.hrService.GetAllLeaves()
    this.empCount=this.hrService.allEmp.length
    this.empOnCount=this.hrService.allEmp.filter((e:any)=>e.state==1).length
    this.empOfCount=this.hrService.allEmp.filter((e:any)=>e.state==0).length
    this.manCount=this.hrService.allEmp.filter((e:any)=>e.roleid==2).length
    this.DepCount=this.hrService.allDep.length

            
  }
}
