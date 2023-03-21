import { Component } from '@angular/core';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})

export class HomeHeaderComponent {
constructor(public hrService:HrService){}

async ngOnInit(){
this.hrService.GetAbout()
}

}
