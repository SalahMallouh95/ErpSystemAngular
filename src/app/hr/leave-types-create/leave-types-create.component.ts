import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-leave-types-create',
  templateUrl: './leave-types-create.component.html',
  styleUrls: ['./leave-types-create.component.css']
})
export class LeaveTypesCreateComponent {

  constructor(public hrService: HrService) { }

  levType = new FormGroup({
    leavetype: new FormControl('', Validators.required)
  })


  async CreateLeaveType() {
    this.hrService.spinner.show()

    await this.hrService.CreateLeaveType(this.levType.value)
    this.hrService.GetAllLeaveTypes()
    this.hrService.spinner.hide()


  }

}
