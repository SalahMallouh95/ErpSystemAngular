import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HrService } from 'src/app/hr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent {
 
   departmentFormGroup = new FormGroup({
    departmentname: new FormControl('', Validators.required),
    userid:new FormControl()
  })

 constructor(public hrService: HrService, public router: Router) { }

  async ngOnInit() {

    await this.hrService.GetAllEmployee()
    this.hrService.allEmp = this.hrService.allEmp.filter((e: { roleid: number; })=>e.roleid==2)
    
  }

  async CreateDep() {
    this.departmentFormGroup.value.userid=parseInt(this.departmentFormGroup.value.userid)
    await this.hrService.CreateDep(this.departmentFormGroup.value)
    
    this.hrService.GetAllDepartment()
  }
 
}
