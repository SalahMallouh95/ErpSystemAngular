import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
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
  constructor(public employeeService:EmployeeService,private router:Router,public dialog: MatDialog,public hrService: HrService,private auth:AuthService,private toaster: ToastrService){

  }
  ngOnInit(): void {
    this.employeeService.GetSolution(this.employeeService.task)
    this.hrService.documentName = {}
    this.hrService.documentName.imagefilename = null
    
  }
  SolutionForm = new FormGroup(
    {
      solutionid:new FormControl(),
      taskid: new FormControl(),
      documentfilename: new FormControl()
    })
    async CreateSolution() {
      
      this.SolutionForm.value.documentfilename=this.hrService.documentName.imagefilename
      this.SolutionForm.value.taskid = this.employeeService.task.taskid
      if(this.SolutionForm.value.documentfilename!=null)
      await this.employeeService.CreateSolution(this.SolutionForm.value)
      else
      this.toaster.error("error")
      this.employeeService.GetSolution(this.employeeService.task)
      
      this.hrService.documentName.imagefilename=null
    }
    async UploadDoc(file: any) {
      let formData = new FormData();
      formData.append('file', file.files[0])
      await this.hrService.UploadDocument(formData)
  
    }
    OpenDialog() {
  
      this.dialog.open(this.Create, {
        height: '300px',
        width: '600px',
      })
    }
    async OpenUpdateDialog(id: number) {
      this.employeeService.onesol=this.employeeService.allSol.find((l:any)=>l.solutionid==id)
      this.SolutionForm.patchValue(this.employeeService.onesol)
      this.dialog.open(this.Update, {
        height: '300px',
        width: '600px',
      })
  
    }
  
    async UpdateSolution() {
      this.SolutionForm.value.taskid = this.employeeService.task.taskid
      if(this.hrService.documentName.imagefilename!=null && this.hrService.documentName.imagefilename!=undefined && this.hrService.documentName.imagefilename!='')
      this.SolutionForm.value.documentfilename = this.hrService.documentName.imagefilename
      await this.employeeService.UpdateSolution(this.SolutionForm.value)
      this.employeeService.GetSolution(this.employeeService.task)
      this.hrService.documentName.imagefilename=null
  
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
  

