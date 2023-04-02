import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from 'src/app/manager.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @ViewChild('DeleteDio') Deletedia: any
  depcount: any
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  displayedColumns: string[] = ['Checkin', 'Checkout', 'Workinghour'];
  dataSource: any

  constructor(private tostar: ToastrService, public hrService: HrService, public dialog: MatDialog, public managerService: ManagerService,public auth:AuthService) {

  }


  empInfoForm = new FormGroup({
    userid: new FormControl(),
    fname: new FormControl(null, [Validators.required]),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phonenumber: new FormControl(),
    address: new FormControl(),
    salary: new FormControl(),
    ssn: new FormControl('', Validators.required),
    roleid: new FormControl('', Validators.required),
    departmentid: new FormControl('', Validators.required),
    bankinfoid: new FormControl('', Validators.required),
    imagefilename: new FormControl(),
    isactivated:new FormControl()
  })
  async ngOnInit() {

    this.hrService.spinner.show()

    await this.empInfoForm.reset()
    this.empInfoForm.patchValue(this.hrService.empInfo);
    await this.managerService.GetAttendance(this.hrService.empInfo)
    this.empInfoForm.markAsTouched();
    this.hrService.documentName = {}
    this.hrService.documentName.imagefilename = null
    this.hrService.GetAllDepartment()
    this.depcount = this.hrService.allDep.find((e: any) => e.userid == this.empInfoForm.value.userid)

    this.dataSource = new MatTableDataSource(this.managerService.attendance);
    this.dataSource.paginator = this.paginator;

    this.hrService.spinner.hide()


  }

  async UploadPhoto(file: any) {
    this.hrService.spinner.show()

    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrService.UploadDocument(formData)
    this.hrService.spinner.hide()

  }

  async UpdateProfile() {
    this.hrService.spinner.show()

    if (this.hrService.documentName.imagefilename != null && this.hrService.documentName.imagefilename != undefined && this.hrService.documentName.imagefilename != '')
      this.empInfoForm.value.imagefilename = this.hrService.documentName.imagefilename

    await this.hrService.UpdateEmpProfile(this.empInfoForm.value)
    this.hrService.documentName.imagefilename
    this.hrService.GetEmpInfo(this.hrService.empInfo)
    this.hrService.spinner.hide()

  }
  async EditEmp() {

    this.hrService.spinner.show()
    if (await this.CheckIban() && await this.CheckSSN() && await this.CheckEmail()) {
      this.UpdateProfile()
    }
    else if (await this.CheckIban() == false) {
      this.tostar.error("The iban dose not exist in the Bank Make sure to enter the right IBAN")
    } else if (await this.CheckSSN() == false) {
      this.tostar.error("The SSN number Must be Uniqe Make sure to enter the right ssn number")
    } else if (await this.CheckEmail() == false) {
      this.tostar.error("The Email already in the system ")
    }
    this.hrService.spinner.hide()
  }

  async CheckIban() {
    await this.hrService.GetAllIban()

    let iban = this.hrService.allIban.find((b: any) => b.iban == this.empInfoForm.value.bankinfoid)
    if (iban == null)
      return false
    else
      return true
  }

  async CheckSSN() {
    await this.hrService.GetAllEmployee()
    let user = this.hrService.allEmp.find((b: any) => b.ssn == this.empInfoForm.value.ssn)
    if (user == null)
      return true
    else if (user.userid == this.empInfoForm.value.userid)
      return true
    else
      return false
  }

  async CheckEmail() {
    await this.hrService.GetAllEmployee()
    let user = this.hrService.allEmp.find((b: any) => b.email == this.empInfoForm.value.email)
    if (user == null)
      return true
    else if (user.userid == this.empInfoForm.value.userid)
      return true
    else
      return false
  }

  OpenDeleteDialog() {
    this.dialog.open(this.Deletedia);
  }

  async ChangeProfileActive(state:number) {
    this.hrService.spinner.show()

    let user:any={}
    user.userid=this.empInfoForm.value.userid
    this.empInfoForm.value.isactivated=state;
    this.UpdateProfile()
    await this.hrService.GetEmpInfo(user)
    this.empInfoForm.patchValue(this.hrService.empInfo);
    
    if(state==0)
    this.tostar.success("Account deactivated successfully")
    else
    this.tostar.success("Account activated successfully")

    this.hrService.spinner.hide()

  }

  

  async ChangePassword(){
    let user:any={}
    user.useridnumber=this.empInfoForm.value.userid
    await this.auth.CreatePassString(user)
    await this.SendEmail()
    this.auth.toastr.success("Email for reset your password was sent to your email")

  }

  async SendEmail(){    
    let mail:any={}
      mail.to=this.empInfoForm.value.email;
      mail.subject="Account password reset"
      mail.message="Dear Mr/Mis "
      +this.empInfoForm.value.fname+" "+this.empInfoForm.value.lname+"\nI hope this find you well \n you can reset Your password using the link below: \n "+
    
      "http://localhost:4200/Auth/passwordReset/"+this.auth.userResetPasswordInfo.passwordparam
      +" \n please don't share the link with anyone\n"+
      +" \n best wishes \n StartUp";      
      this.auth.SendMail(mail)  
  }


}


