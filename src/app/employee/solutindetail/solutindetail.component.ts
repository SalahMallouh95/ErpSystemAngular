import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-solutindetail',
  templateUrl: './solutindetail.component.html',
  styleUrls: ['./solutindetail.component.css']
})
export class SolutindetailComponent {
  constructor(private route:ActivatedRoute,public employeeService:EmployeeService){

  }
    id:number|undefined
    solutionInfo:any|{}  
  
    ngOnInit(): void {
      //this.id=this.route.snapshot.params['id'];
    }
}
