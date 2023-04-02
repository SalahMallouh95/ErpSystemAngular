import { Component } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

  constructor(public hrService: HrService) { }
  async ngOnInit() {
    await this.hrService.GetAllServices()

  }

}
