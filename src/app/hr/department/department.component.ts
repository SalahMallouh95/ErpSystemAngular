import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HrService } from 'src/app/hr.service';
import { DepartmentCreateComponent } from '../department-create/department-create.component';
import { DepartmentEditComponent } from '../department-edit/department-edit.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('DeleteDio') Deletedia: any
  @ViewChild('CreateDio') Createdia: any
  rawDepid: number | undefined


  constructor(public hrService: HrService, public router: Router, public dialog: MatDialog) { }


  async ngOnInit() {

    this.hrService.spinner.show()
    await this.hrService.GetAllDepartment();

    this.hrService.spinner.hide()

  }

  async ViewEmp(id: any) {
    await this.hrService.GetAllEmployee()
    this.hrService.allEmp = this.hrService.allEmp.filter((emp: { departmentid: any; }) => emp.departmentid == id);
    this.router.navigate(['Hr/DepartmentEmp']);
  }
  async DeleteDep(id: any) {
    await this.hrService.DeleteDep(id)
    this.ngOnInit()
  }

  OpenDeleteDialog(id: any) {
    this.rawDepid = id
    this.dialog.open(this.Deletedia);

  }

  OpenCreateDialog() {
    this.dialog.open(DepartmentCreateComponent);
    this.hrService.GetAllDepartment
  }

  async OpenEditDialog(id: any) {
    this.hrService.GetAllDepartment
    this.hrService.depInfo = this.hrService.allDep.filter((d: { departmentid: any; }) => d.departmentid == id)
    this.dialog.open(DepartmentEditComponent);

  }

}
