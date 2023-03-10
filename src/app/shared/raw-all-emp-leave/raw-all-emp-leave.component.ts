import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-raw-all-emp-leave,[app-raw-all-emp-leave]',
  templateUrl: './raw-all-emp-leave.component.html',
  styleUrls: ['./raw-all-emp-leave.component.css']
})
export class RawAllEmpLeaveComponent {
@Input() fName:string|undefined
@Input() LName:string|undefined
@Input() startDate:string|undefined
@Input() endDate:string|undefined
@Input() State:number|undefined
@Input() leaveid:number|undefined

@Output() SendValues = new EventEmitter()

SendSelecterEmpId()
{
  this.SendValues.emit(this.leaveid)
}
}
