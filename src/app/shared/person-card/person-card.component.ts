import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-person-card,[app-person-card]',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent { 
  @Input() allEmp :any[]|undefined 
  
  @Output() SendValues = new EventEmitter()
  
  SendSelecterEmpId(id:any)
  {
    this.SendValues.emit(id)
    console.log(id)
  }
}
