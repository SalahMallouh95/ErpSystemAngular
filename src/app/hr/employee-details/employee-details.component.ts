import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public hrservice:HrService,private aRoute:ActivatedRoute,private route:Router){

  }
  id:number|undefined
  empInfo:any|{}

  ngOnInit(): void {

    this.empInfo=this.hrservice.empInfo; 
    }
  }


