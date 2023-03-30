import { Component, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-mtree',
  templateUrl: './mtree.component.html',
  styleUrls: ['./mtree.component.css']
})
export class MtreeComponent {

  constructor(public man: ManagerService, public hrService: HrService, private spinner: NgxSpinnerService) { }

  @ViewChild('DeleteDio') details: any
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
    this.spinner.hide()
  }

  async DepDetailes(){

  }

  OpenDepDetailes(){

  }
}
