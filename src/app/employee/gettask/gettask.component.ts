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
    this.tasks.userid = 45;
    this.employeeService.GetAlltask(this.tasks);
  }

  async GetValue(id: any) {
    await this.employeeService.GetAlltask(this.tasks);
  }
  task:any ={}
 async GetValues(id: any) {
    this.task.taskid=id
    await this.employeeService.GettaskById(this.task)
    this.router.navigate(['Employee/getsolution']);
  }
}
