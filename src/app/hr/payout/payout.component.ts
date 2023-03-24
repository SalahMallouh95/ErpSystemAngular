import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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

  constructor(public hrService: HrService) {

  }

  async ngOnInit() {

    await this.hrService.GetPayout(this.range.value)
    this.hrService.dtOptions = {
      // Declare the use of the extension in the dom parameter   
      dom: 'Bfrtip',
      // Configure the buttons  
      buttons: ['columnsToggle', 'colvis', 'copy', 'print', 'excel', 'csv', 'pdf',
        {
          text: 'Some button', key: '1', action: function (e: any, dt: any, node: any, config: any) { alert('Button activated'); }
        }]
    };
  }

  async Search() {

    await this.hrService.GetPayout(this.range.value)

  }




}

