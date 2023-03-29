import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {
  
    dep=new FormGroup({
    departmentname:new FormControl('',[Validators.required]),
    userid:new FormControl(),
    departmentid:new FormControl()
  })

  constructor(public hrService:HrService){
    
  }

  async ngOnInit(){
    this.hrService.spinner.show()

    await this.hrService.GetAllEmployee()
    this.hrService.allEmp = this.hrService.allEmp.filter((e: { roleid: number; })=>e.roleid==2)    
    this.dep.patchValue(this.hrService.depInfo[0]) 

    this.hrService.spinner.hide()    
  }

  async UpdateDep()
  {
    this.hrService.spinner.show()

    this.dep.value.userid=parseInt(this.dep.value.userid);
    await this.hrService.EditDep(this.dep.value)    
    this.hrService.GetAllDepartment()

    this.hrService.spinner.hide()
  }

}
