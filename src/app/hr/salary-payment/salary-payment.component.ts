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
  constructor(public hrService: HrService, public tostar: ToastrService, private auth: AuthService) {

  }
  totalSalary: number = 0
  empList: any

  async ngOnInit() {
    this.hrService.spinner.show()

    await this.hrService.GetAllEmployee()
    this.empList = this.hrService.allEmp.filter((e: any) => e.isactivated == 1)
    console.log(this.empList);

    this.totalSalary = this.GetTotalSalary()
    this.hrService.spinner.hide()

  }

  GetTotalSalary() {
    let total = 0;
    this.empList.forEach((element: { salary: number; }) => {
      total = total + element.salary
    });
    return total;
  }

  async TransferSalary() {
    if (await this.CheckBlance()) {
      this.hrService.TransferSalary()

      this.tostar.success("Salary's was transferd succssasfully")

      this.SendEmail()
    }
    else {
      this.tostar.error("Bank Balance Not enough")

    }
  }

  async CheckBlance() {
    await this.hrService.GetBlance()
    if (this.hrService.bankBalance.balance >= this.totalSalary) {
      return true;
    }
    else {
      return false;
    }
  }

  SendEmail() {
    let mail: any = {}
    this.empList.forEach((element: any) => {
      mail.to = element.email;
      mail.subject = "Salary delivered"
      mail.message = "Dear Mr/Mis "
        + element.fname + " " + element.lname + "\nI hope this find you well \n We happy to conform that your salary was send succssasfully and the amount is  " +
        element.salary +
        ".\n best wishes\n" + this.auth.systemUserInfo.rolename + "." + this.auth.systemUserInfo.fname + " " + this.auth.systemUserInfo.lname;
      this.auth.SendMail(mail)
    });
  }

}
