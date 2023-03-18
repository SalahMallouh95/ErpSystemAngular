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
    departmentname:new FormControl(),
    userid:new FormControl()
  })

  constructor(public hrService:HrService){
    
    this.dep.controls['userid'].setValue(this.dep.value.userid,{onlySelf:true})
  }

  async ngOnInit(){
    await this.hrService.GetAllEmployee()
    this.hrService.allEmp = this.hrService.allEmp.filter((e: { roleid: number; })=>e.roleid==2)
    console.log(this.hrService.depInfo);
    this.dep.patchValue(this.hrService.depInfo[0]) 
    console.log(this.dep.value);
    
    
  }

  UpdateDep()
  {


  }

}
