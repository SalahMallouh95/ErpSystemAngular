import { Component, Input } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-dep-tree',
  templateUrl: './dep-tree.component.html',
  styleUrls: ['./dep-tree.component.css']
})
export class DepTreeComponent {
  @Input() allEmp: any[] = []
  @Input() depId: any
  @Input() manager: any
  constructor(public hrService: HrService) {

  }

  async ngOnInit() {
  }

}
