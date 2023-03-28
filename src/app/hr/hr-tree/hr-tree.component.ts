import { Component } from '@angular/core';
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



  constructor(public hrService: HrService) {

  }

  async ngOnInit() {
    await this.hrService.GetAllEmployee()
    await this.hrService.GetAllDepartment()
    this.manger = this.hrService.allEmp.find((e: any) => e.roleid == 2 && e.departmentid == this.departmentid)
    this.depEmp = this.hrService.allEmp.filter((e: any) => e.roleid == 3 && e.departmentid == this.departmentid)
    this.departmentid = this.hrService.allDep[0].departmentid

  }

  async ChangeDep() {
    await this.hrService.GetAllEmployee()
    await this.hrService.GetAllDepartment()
    this.manger = this.hrService.allEmp.find((e: any) => e.roleid == 2 && e.departmentid == this.departmentid)
    this.depEmp = this.hrService.allEmp.filter((e: any) => e.roleid == 3 && e.departmentid == this.departmentid)
  }

}
