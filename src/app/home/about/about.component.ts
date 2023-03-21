import { Component , OnInit} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  implements OnInit {
  constructor(private spinner: NgxSpinnerService,public hrService:HrService) {}
  
  ngOnInit(): void {
   
  }
}