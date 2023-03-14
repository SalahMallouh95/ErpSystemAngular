import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent {
  constructor(public hrService:HrService, public router:Router) {}
  depName:string|undefined
  dep:any={}

  async CreateDep() {
   this.dep.departmentname=this.depName
   await this.hrService.CreateDep(this.dep)
   this.router.navigate(['Hr/Department'])
  }
}
