import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-createleave',
  templateUrl: './createleave.component.html',
  styleUrls: ['./createleave.component.css']
})
export class CreateleaveComponent implements OnInit{
  constructor(public employeeService:EmployeeService,private router:Router){

  }
  leavetype1:any|{}
  ngOnInit(): void {
    this.leavetype1=this.employeeService.leavetype1
  }
  
}
