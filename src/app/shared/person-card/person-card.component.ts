import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person-card,[app-person-card]',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
  @Input() allEmp: any[] | undefined
  @Input() allDep: any[] | undefined
  role: any
  department: any


  @Output() SendValues = new EventEmitter()


  SendSelecterEmpId(id: any) {
    this.SendValues.emit(id)
  }

  GetDepName(id: any) {
    const obj = this.allDep?.find(x => x.departmentid == id);
    return obj.departmentName;

  }

}
