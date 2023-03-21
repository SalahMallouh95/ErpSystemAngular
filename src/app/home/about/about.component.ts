import { Component , OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {

  emplist :any
  constructor(private spinner: NgxSpinnerService,public hrService:HrService) {}
  
  async ngOnInit() {
   await this.hrService.GetAllEmployee()
   this.emplist= this.hrService.allEmp.filter((emp:any) =>emp.roleid==2)
   console.log(this.emplist);
   console.log("xxxx");

   
  }
}