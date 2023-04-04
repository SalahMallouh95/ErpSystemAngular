import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-mtree',
  templateUrl: './mtree.component.html',
  styleUrls: ['./mtree.component.css']
})
export class MtreeComponent {

  constructor(public man: ManagerService, public hrService: HrService, private spinner: NgxSpinnerService, public dialog: MatDialog, private auth: AuthService) { }


  userData: any = this.auth.getdata()
  emplist: any
  mans : any ={}
  
  async ngOnInit() {
    this.spinner.show()
    await this.man.GetAllEmp(this.userData)
    this.emplist = this.man.AllEmp
    await this.man.GetManagerPrifile(this.userData)
    this.mans = this.man.ManagerProfile
    
    await this.hrService.GetAllDepartment();
    this.man.oneDepartment = this.hrService.allDep.find((e:any)=> e.userid == this.userData.userid)
    console.log( this.man.oneDepartment.descrip);
    
    
    this.spinner.hide()
  }

 
}
