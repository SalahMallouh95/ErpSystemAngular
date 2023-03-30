import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent {
     totalSalary:number=0
  range = new FormGroup({
    startdate: new FormControl<Date | null>(null),
    enddate: new FormControl<Date | null>(null)
  });

  x: any = []
  chartOptions = {}
  overallTotal :number|undefined

  constructor(public hrService: HrService,public http: HttpClient) {

  }

  async ngOnInit() {
    this.hrService.spinner.show()
  await this.http.post("https://localhost:44388/api/Hr/getpayout", this.range.value).subscribe(
    {
      next: (res) => {
        this.hrService.allPayout = res
        this.ReinitializeTable()
        this.CreateChartData()
        this.SumSalary()
      },
      error: (ee) => {
        console.log(ee)
      }
    }
  )

  this.hrService.spinner.hide()
}

  async Search() { 

  await this.hrService.GetPayout(this.range.value)

    this.ReinitializeTable() 
    this.CreateChartData()
}

ReinitializeTable(){
  $('#datatableexample').DataTable().clear().destroy();

  setTimeout(()=>{   
    $('#datatableexample').DataTable( {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      dom: 'Blfrtip' 
     
       
  } );
  }, 1);
}

SumSalary(){
  this.totalSalary=0
  this.hrService.allPayout.forEach((element: { salary: number; }) => {
    this.totalSalary=this.totalSalary+element.salary
  });
}

async CreateChartData() {
  
  this.x.splice(0);
  this.overallTotal=0
  let payoutsByYearAndMonth :any= {};
  this.chartOptions = {}

  // Accumulate total salary for each month in each year
  this.hrService.allPayout.forEach((payout: { receiveddate: string | number | Date; salary: any; }) => {
    const payoutDate = new Date(payout.receiveddate);
    const year = payoutDate.getFullYear();
    const month = payoutDate.getMonth() + 1;

    if (!payoutsByYearAndMonth[year]) {
      payoutsByYearAndMonth[year] = {};
    }
    if (!payoutsByYearAndMonth[year][month]) {
      payoutsByYearAndMonth[year][month] = 0;
    }
    payoutsByYearAndMonth[year][month] += payout.salary;
    this.overallTotal += payout.salary;
  });

  // Push the accumulated salary to the chart data
  Object.keys(payoutsByYearAndMonth).forEach(year => {
    Object.keys(payoutsByYearAndMonth[year]).forEach(month => {
      const total = payoutsByYearAndMonth[year][month];
      this.x.push({ x: new Date(parseInt(year)  , parseInt(month) - 1, 1), y: total });
    });
  });
  this.SumSalary()
  this.CreateChartOptions()

}

CreateChartOptions(){
  this.chartOptions = {
    theme: "light2",
    animationEnabled: true,
    zoomEnabled: true,
    willReadFrequently: true,
    title: {
      text: "Total Paid Salary $"+this.overallTotal
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
      xValueFormatString: "YYYY MMM",
      yValueFormatString: "$#,###.##",
      dataPoints: this.x
    }]
  }
}



}

