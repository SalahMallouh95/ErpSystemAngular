import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm= new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    message:new FormControl(),
    phonenumber:new FormControl()
  })


  constructor(private spinner: NgxSpinnerService,public hrService:HrService) {}
  ngOnInit(): void {
   
  }
  SendMessage(){
    this.hrService.SendMessageContactUs(this.contactForm.value)
    this.contactForm.reset()
  }
}
