import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public hrservice:HrService,private route:ActivatedRoute){
  }
  id:number|undefined
  emp:any|{}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   // this.emp=this.hrservice.allEmp.filter((e)=>e.userid==this.id)    
  }

}
