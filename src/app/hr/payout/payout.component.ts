import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent {

  // @ViewChild(DataTableDirective) dtElement!: DataTableDirective;
  // dtOptions: DataTables.Settings | any = {};
  // dtTrigger: Subject<any> = new Subject();
  // rerender(): void {
  //   this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     // Destroy the table first  
  //     dtInstance.clear()
  //     dtInstance.destroy();
  //     // Call the dtTrigger to rerender again     
  //     this.dtTrigger.next(0);
  //   });
  // }


  range = new FormGroup({
    startdate: new FormControl<Date | null>(null),
    enddate: new FormControl<Date | null>(null)
  });

  constructor(public hrService: HrService) {

  }

  ngOnInit() {
    this.hrService.spinner.show()

    this.hrService.dtOptions = {
      // Declare the use of the extension in the dom parameter   
      dom: 'Bfrtip',
      // Configure the buttons  
      buttons: ['print', 'excel', {

        text: 'Some button',

        key: '1',

        action: function (e: any, dt: any, node: any, config: any) {

          alert('Button activated');

        }

      }]
  };
  this.hrService.GetPayout(this.range.value)
  this.hrService.spinner.hide()


}

// ngAfterViewInit(){
//   this.dtTrigger.next(0)
// }

// ngOnDestroy(){
//   this.dtTrigger.unsubscribe()
// }

  async Search() {
    this.hrService.spinner.show()

  await this.hrService.GetPayout(this.range.value)
  this.hrService.spinner.hide()

}

 


}

