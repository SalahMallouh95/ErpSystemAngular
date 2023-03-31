import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent {

 obj={}
  emp: any = { "userid": null }
  totalSalary: number=0;
  constructor(public man: ManagerService, public hrService: HrService,public auth: AuthService) { }

  async ngOnInit() {
    this.man.spinner.show()
    let data = this.auth.getdata()
    this.emp.userid = data.userid
    await this.hrService.GetPayout(this.obj)
    this.man.myPayout = this.hrService.allPayout.filter((x: any) => x.userid ==  this.emp.userid)
    this.SumSalary()
    this.man.spinner.hide()
  }

  SumSalary(){
    this.totalSalary=0
    this.man.myPayout.forEach((element: { salary: number; }) => {
      this.totalSalary=this.totalSalary+element.salary
    });
   
    
  }
}
