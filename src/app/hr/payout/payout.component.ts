import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent {

  range = new FormGroup({
    startdate: new FormControl<Date | null>(null),
    enddate: new FormControl<Date | null>(null)
  });

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

      },
      error: (ee) => {
        console.log(ee)
      }
    }
  )

  this.hrService.spinner.hide()
}

  async Search() {
    this.hrService.spinner.show()
    $('#datatableexample').DataTable().clear().destroy();
  await this.hrService.GetPayout(this.range.value)
  this.ReinitializeTable()

  this.CreateChartData()

  this.hrService.spinner.hide()
}

ReinitializeTable(){
  setTimeout(()=>{   
    $('#datatableexample').DataTable( {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      dom: 'Blfrtip',      
  } );
  }, 1);
}

async CreateChartData() {
 this.x.splice(0)
  for (let i = 1; i <= 12; i++) {
    let total = 0;
    for (let j = 0; j < this.hrService.allPayout.length; j++) {
      if (new Date(this.hrService.allPayout[j].receiveddate).getMonth() == i) {
        total = total + this.hrService.allPayout[j].salary
      }
    }
    this.x.push({ x: new Date(new Date(this.hrService.allPayout[i].receiveddate).getFullYear(), i, 1), y: total });
  }
}



x: any = []
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
    xValueFormatString: "YYYY MMM",
    yValueFormatString: "$#,###.##",
    dataPoints: this.x
  }]
}

}

