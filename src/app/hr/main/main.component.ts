import { Component , ViewChild} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { HrService } from 'src/app/hr.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  empCount: any
  empOnCount: any
  empOfCount: any
  manCount: any
  DepCount: any
  totalSalary=0
  x: any = []

  @ViewChild(MatPaginator) paginator: MatPaginator|any;
  displayedColumns: string[] = ['ssn', 'name', 'receiveddate','salary'];
  dataSource :any

  constructor(public hrService: HrService, private auth: AuthService,private spiner:NgxSpinnerService) {

  }

  async ngOnInit() {
    this.spiner.show()
    let userData: any = JSON.parse(localStorage.getItem('userInfo') + '')
    userData.userid = parseInt(userData.userid)
    userData.roleid = parseInt(userData.roleid)
    delete userData.exp
    localStorage.setItem('fullUserInfo', JSON.stringify(this.hrService.empInfo))

    await this.hrService.GetAllEmployee()
    await this.hrService.GetAllDepartment()
    await this.hrService.GetAllLeaves()

    this.empCount = this.hrService.allEmp.length
    this.empOnCount = this.hrService.allEmp.filter((e: any) => e.state == 1).length
    this.empOfCount = this.hrService.allEmp.filter((e: any) => e.state == 0).length
    this.manCount = this.hrService.allEmp.filter((e: any) => e.roleid == 2).length
    this.DepCount = this.hrService.allDep.length

    this.CreateChartData()
    this.spiner.hide()


  }

  async CreateChartData() {
    let pay: any = {}
    
    pay.startdate = new Date().getFullYear()+'-01-01'
    pay.enddate = new Date().getFullYear()+'-12-31'
    
    await this.hrService.GetPayout(pay)

    this.dataSource= new MatTableDataSource(this.hrService.allPayout);
    this.dataSource.paginator = this.paginator;

    for (let i = 0; i < 12; i++) {
      let total = 0;
      for (let j = 0; j < this.hrService.allPayout.length; j++) {
        if (new Date(this.hrService.allPayout[j].receiveddate).getMonth() == i) {
          total = total + this.hrService.allPayout[j].salary
        }
      }
      this.x.push({ x: new Date(new Date(this.hrService.allPayout[0].receiveddate).getFullYear(), i, 1), y: total });
    }
  }

  chartOptions = {
    theme: "light2",
    animationEnabled: true,
    zoomEnabled: true,
    willReadFrequently: true,
    title: {
      text: "Paid Salary for this year"
    },
    axisY: {
      labelFormatter: (e: any) => {
        var suffixes = ["", "K", "M", "B", "T"];

        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
          order = suffixes.length - 1;

        var suffix = suffixes[order];
        return "$" + (e.value / Math.pow(1000, order)) + suffix;
      }
    },
    data: [{
      type: "line",
      xValueFormatString: "MMM",
      yValueFormatString: "$#,###.##",
      dataPoints: this.x
    }]
  }
}
