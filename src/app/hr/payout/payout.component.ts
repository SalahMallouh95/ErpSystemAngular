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
  
  constructor(public hrService:HrService){

  }

  async ngOnInit(){
    
     await this.hrService.GetPayout(this.range.value)
  }

  async Search(){

    await this.hrService.GetPayout(this.range.value)

  }

}

