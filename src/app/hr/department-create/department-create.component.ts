import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HrService } from 'src/app/hr.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent {
  constructor(public hrService: HrService, public router: Router) { }
  depName: string | undefined
  managerid: any | undefined
  dep: any = {}

  async ngOnInit() {

    await this.hrService.GetAllEmployee()
    this.hrService.allEmp = this.hrService.allEmp.filter((e: { roleid: number; })=>e.roleid==2)
    
  }

  async CreateDep() {
    this.dep.departmentname = this.depName
    this.dep.userid = parseInt(this.managerid) 
    await this.hrService.CreateDep(this.dep)
    
    this.hrService.GetAllDepartment()
  }

  Prient() {
    console.log(this.managerid);

  }
}
