import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-gettask',
  templateUrl: './gettask.component.html',
  styleUrls: ['./gettask.component.css']
})

export class GettaskComponent implements OnInit {
  constructor(public employeeService: EmployeeService, private router: Router, public dialog: MatDialog, public hrService: HrService) {

  }

  tasks: any = {}
  ngOnInit(): void {
    this.tasks.userid = 1;
    this.employeeService.GetAlltask(this.tasks);
  }

  async GetValue(id: any) {
    await this.employeeService.GetAlltask(this.tasks);
  }
  GetValues(id: any) {
    this.employeeService.GettaskById(id)
    this.router.navigate(['Employee/getsolution']);
  }
}
