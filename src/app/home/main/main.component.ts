import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Departments: number = 0
  allemp: number = 0
  constructor(public man: ManagerService, private spinner: NgxSpinnerService, public hrService: HrService, private auth: AuthService) { }
  async ngOnInit() {
   this.man.spinner.show()
    await this.hrService.GetAllHome()
    await this.hrService.GetAllDepartment()
    this.Departments = this.hrService.allDep.length
    await this.hrService.GetAllEmployee()
    this.allemp = this.hrService.allEmp.length
    this.man.spinner.hide()

  }

}

