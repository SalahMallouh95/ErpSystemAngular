import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-manager-side-bar',
  templateUrl: './manager-side-bar.component.html',
  styleUrls: ['./manager-side-bar.component.css']
})
export class ManagerSideBarComponent {
  leaveCount: number = 0
  submitedTasks: number = 0
  constructor(public man: ManagerService, private auth: AuthService) { }

  async ngOnInit() {
    let userData: any = this.auth.getdata()
    await this.man.GetAllLeaves(userData)
    this.leaveCount = this.man.AllLeave.filter((e: any) => e.state == 2).length
    await this.man.GetAllTasks(userData)
    this.submitedTasks = this.man.AllTasks.filter((e: any) => e.state == 0).length
  }
}
