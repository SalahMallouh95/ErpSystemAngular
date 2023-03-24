import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-create-leave',
  templateUrl: './create-leave.component.html',
  styleUrls: ['./create-leave.component.css']
})
export class CreateLeaveComponent {

  constructor(public managerserv : ManagerService , public employeeService:EmployeeService,private router:Router,private auth:AuthService, public hrService: HrService){

  }

  
  ngOnInit(): void {
    let leave  : any = {}
    this.hrService.GetAllLeaveTypes()

  }

  leaveform = new FormGroup({
    leavetypeid: new FormControl(),
      startdate: new FormControl(),
      enddate: new FormControl(),
      message: new FormControl(),
      userid: new FormControl(),
      documentfilename: new FormControl()
  })

  async CreateLeave() {
    if(this.hrService.documentName.imagefilename!=null && this.hrService.documentName.imagefilename!=undefined && this.hrService.documentName.imagefilename!='')
    this.leaveform.value.documentfilename = this.hrService.documentName.imagefilename
    this.leaveform.value.userid =this.auth.systemUserInfo.userid
    await this.employeeService.CreateLeave(this.leaveform.value)
    this.managerserv.GetMyLeaves(this.leaveform.value)
    console.log(this.leaveform.value)
  }

  async UploadDoc(file: any) {
    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrService.UploadDocument(formData)
    console.log(this.leaveform.value.documentfilename);

  }

}
