import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-e-tree',
  templateUrl: './e-tree.component.html',
  styleUrls: ['./e-tree.component.css']
})
export class ETreeComponent {
  constructor(private auth:AuthService,public employeeService: EmployeeService,public man: ManagerService, public hrService: HrService, private spinner: NgxSpinnerService) { }

  userdata: any 
  emplist: any
  mans : any 

  async ngOnInit() {
    this.spinner.show()
    this.userdata=this.auth.getdata()
    await this.hrService.GetAllEmployee()
    await this.hrService.GetEmpInfo(this.userdata)
    this.emplist = this.hrService.allEmp.filter((l: any)=>l.departmentid==this.hrService.empInfo.departmentid&&l.roleid==3&& l.isactivated==1)
    this.mans = this.hrService.allEmp.find((l: { departmentid: any; roleid: number; })=>l.departmentid==this.hrService.empInfo.departmentid&&l.roleid==2)
    
    this.spinner.hide()
  }


}
