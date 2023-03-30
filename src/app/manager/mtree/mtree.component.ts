import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-mtree',
  templateUrl: './mtree.component.html',
  styleUrls: ['./mtree.component.css']
})
export class MtreeComponent {

  constructor(public man: ManagerService, public hrService: HrService, private spinner: NgxSpinnerService, public dialog: MatDialog) { }


  userData: any = JSON.parse(localStorage.getItem('userInfo') + '')
  emplist: any
  mans : any ={}
  
  async ngOnInit() {
    this.spinner.show()
    this.userData.userid = parseInt(this.userData.userid)
    this.userData.roleid = parseInt(this.userData.roleid)
    delete this.userData.exp
    await this.man.GetAllEmp(this.userData)
    this.emplist = this.man.AllEmp
    await this.man.GetManagerPrifile(this.userData)
    this.mans = this.man.ManagerProfile
    
    await this.hrService.GetAllDepartment();
    this.man.oneDepartment = this.hrService.allDep.filter((e:any)=> e.userid == this.userData.userid)
    console.log( this.man.oneDepartment[0].descrip);
    
    
    this.spinner.hide()
  }

 
}
