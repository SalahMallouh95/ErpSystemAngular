import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService,public hrService:HrService) {}
  ngOnInit(): void {
   
  }
  
}
