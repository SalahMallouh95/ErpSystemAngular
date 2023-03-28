import { Component, Input } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-dep-tree',
  templateUrl: './dep-tree.component.html',
  styleUrls: ['./dep-tree.component.css']
})
export class DepTreeComponent {
  allEmp :any[]|undefined   
  @Input() depId:any
  manager:any
  constructor(public hrService:HrService){

  }

  async ngOnInit(){
    await this.hrService.GetAllEmployee()
    this.manager=this.hrService.allEmp?.find((e:any)=>e.roleid==2 && e.departmentid==this.depId)
    this.allEmp=this.hrService.allEmp.filter((e:any)=>e.departmentid=this.depId&& e.roleid==3)
  }

}
