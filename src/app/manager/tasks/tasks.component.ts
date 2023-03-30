import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @ViewChild('DeleteDio') Deletedia: any
  constructor(private spinner: NgxSpinnerService, public man: ManagerService, private route: Router, private auth: AuthService, public dialog: MatDialog) {

  }

  userData: any = {}
  id: number = this.auth.systemUserInfo.userid

  async ngOnInit() {
    this.spinner.show()
    this.userData = JSON.parse(localStorage.getItem('userInfo') + '')
    this.userData.userid = parseInt(this.userData.userid)
    this.userData.roleid = parseInt(this.userData.roleid)
    delete this.userData.exp
    await this.man.GetAllTasks(this.userData)
    this.userData = this.man.AllTasks.filter((l: { userid: number; }) => l.userid == 2)
    this.spinner.hide()
  }



  async GetValues(id: any) {
    this.man.spinner.show()
    let task: any = {}
    task.taskid = id
    await this.man.GetTaskDetails(task)
    await this.man.GetAllSolutions(task)
    this.route.navigate(['Manager/TaskSolution']);
    this.man.spinner.hide()
  }

  async GetEditValues(id: any) {
    this.man.spinner.show()
    let task: any = {}
    task.taskid = id
    await this.man.GetTaskDetails(task)
    await this.man.GetAllSolutions(task)
    this.route.navigate(['/Manager/EditTask', id])
    this.man.spinner.hide()
  }

  task: any = {}

  async deletetask(id: any) {
    this.spinner.show()
    this.task.taskid = id
    await this.man.GetTaskDetails(this.task)
    await this.man.DeleteTask(id)

    let user: any = {}
    user.userid = this.id
    await this.man.GetAllTasks(user)
    this.spinner.hide()

  }

  OpenDeleteDialog(id: any) {
    this.man.spinner.show()
    this.task.taskid = id
    this.dialog.open(this.Deletedia);
    this.man.spinner.hide()
  }

}
