import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-salary-payment',
  templateUrl: './salary-payment.component.html',
  styleUrls: ['./salary-payment.component.css']
})
export class SalaryPaymentComponent {
  constructor(public hrService:HrService,public tostar:ToastrService, private auth:AuthService)
  {

  }
  totalSalary:number=0

  async ngOnInit(){
    await this.hrService.GetAllEmployee()
    this.totalSalary=this.GetTotalSalary()
  }

  GetTotalSalary(){
    let total=0;
    this.hrService.allEmp.forEach((element: { salary: number; }) => {
      total=total+element.salary      
    });
    return total;
  }

  async TransferSalary(){
    if(await this.CheckBlance()){
      this.hrService.TransferSalary()
      this.tostar.success("Salary's was transferd succssasfully")
    }
    else{
      this.tostar.error("Bank Balance Not enough")

    }
  }

  async CheckBlance(){
     await this.hrService.GetBlance()
     if(this.hrService.bankBalance.balance>=this.totalSalary)
     {
      return true;
     }
     else
     {
      return false;
     }
  }

  SendEmail(){
    let mail:any={}
    this.hrService.allEmp.forEach((element:any) => {
      mail.to=element.email;
      mail.subject="Salary delivered"
      mail.message="Dear Mr/Mis "
      +element.fname+" "+element.lname+"\nI hope this find you well \n We happy to conform that your salary was send succssasfully and the amount is  "+
      element.salary+
      ".\n best wishes\n"+this.auth.systemUserInfo.rolename+"."+this.auth.systemUserInfo.fname+" "+this.auth.systemUserInfo.lname;
      
    });
  }

}
