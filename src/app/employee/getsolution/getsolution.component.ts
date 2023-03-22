import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { SolutindetailComponent } from '../solutindetail/solutindetail.component';

@Component({
  selector: 'app-getsolution',
  templateUrl: './getsolution.component.html',
  styleUrls: ['./getsolution.component.css']
})
export class GetsolutionComponent {
  @ViewChild('CreateForm') Create: any
  @ViewChild('UpdateForm') Update: any
  @ViewChild('DeleteForm') Delete: any
  constructor(public employeeService:EmployeeService,private router:Router,public dialog: MatDialog,public hrService: HrService){

  }
  ngOnInit(): void {
    console.log(this.employeeService.task);
    this.employeeService.GetSolution(this.employeeService.task)
    console.log(this.employeeService.allSol);
    this.hrService.documentName={}
    this.hrService.documentName.imagefilename=null
    
  }
  SolutionForm = new FormGroup(
    {
      taskid: new FormControl(),
      documentfilename: new FormControl()
    })
    async CreateSolution() {
      this.SolutionForm.value.taskid = this.employeeService.task.taskid
      await this.employeeService.CreateSolution(this.SolutionForm.value)
      this.employeeService.GetSolution(this.employeeService.task)
      console.log(this.SolutionForm.value)
    }
    async UploadDoc(file: any) {
      let formData = new FormData();
      formData.append('file', file.files[0])
      await this.hrService.UploadDocument(formData)
      console.log(this.SolutionForm.value.documentfilename);
  
    }
    OpenDialog() {
  
      this.dialog.open(this.Create, {
        height: '300px',
        width: '600px',
      })
    }
    async OpenUpdateDialog(id: number) {
      this.employeeService.onesol=this.employeeService.allSol.find((l:any)=>l.solutionid==id)
      console.log(this.employeeService.onesol);
      this.SolutionForm.patchValue(this.employeeService.leave)
      this.dialog.open(this.Update, {
        height: '300px',
        width: '600px',
      })
  
    }
  
    async UpdateSolution() {
      if(this.hrService.documentName.imagefilename!=null && this.hrService.documentName.imagefilename!=undefined && this.hrService.documentName.imagefilename!='')
      this.employeeService.leave.documentfilename = this.hrService.documentName.imagefilename
      this.SolutionForm.value.taskid = this.employeeService.task.taskid
      console.log(this.SolutionForm.value);
      await this.employeeService.UpdateSolution(this.SolutionForm.value)
      this.employeeService.GetSolution(this.employeeService.task)
  
    }
    async OpenDeleteDialog(id: number) {
      this.employeeService.onesol=this.employeeService.allSol.find((l:any)=>l.solutionid==id)
      this.dialog.open(this.Delete)
    }
  
    async DeleteSolution() {
      await this.employeeService.DeleteSolution(this.employeeService.onesol.solutionid)
      this.employeeService.GetSolution(this.employeeService.task)
    }
   GetValues(id :any){
    
    this.employeeService.onesol=this.employeeService.allSol.find((l:any)=>l.solutionid==id)
    this.OpenMoreInfoDialog()
  }
  GetValue(id :any){
    this.router.navigate(['Employee/editsolution',id]);
  }
  OpenMoreInfoDialog() {
    this.dialog.open(SolutindetailComponent, {
      height: '300px',
      width: '300px',
    })
  }
  }
  

