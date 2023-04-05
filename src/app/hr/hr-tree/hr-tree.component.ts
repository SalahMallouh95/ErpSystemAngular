import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-hr-tree',
  templateUrl: './hr-tree.component.html',
  styleUrls: ['./hr-tree.component.css']
})
export class HrTreeComponent {

  departmentid: number | undefined
  depEmp: any
  manger: any



  constructor(public hrService: HrService, private spinner: NgxSpinnerService) {

  }

  async ngOnInit() {
    this.spinner.show()
    await this.hrService.GetAllEmployee()
    await this.hrService.GetAllDepartment()
    this.departmentid = this.hrService.allDep[0].departmentid 
    this.manger = this.hrService.allEmp.find((e: any) => e.roleid == 2 && e.departmentid == this.departmentid)
    this.depEmp = this.hrService.allEmp.filter((e: any) => e.roleid == 3 && e.departmentid == this.departmentid)    
    this.spinner.hide()

  }

  async ChangeDep() {
    this.spinner.show()
    await this.hrService.GetAllEmployee()
    await this.hrService.GetAllDepartment()
    this.manger = this.hrService.allEmp.find((e: any) => e.roleid == 2 && e.departmentid == this.departmentid)
    this.depEmp = this.hrService.allEmp.filter((e: any) => e.roleid == 3 && e.departmentid == this.departmentid)
    this.spinner.hide()
  }

}
