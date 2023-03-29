import { Component, ViewChild } from '@angular/core';
import { HrService } from 'src/app/hr.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  @ViewChild('DeleteDio') Deletedia:any

  messageid:any|undefined
  constructor(public hrService:HrService,public dialog:MatDialog){}

  async ngOnInit(){
    this.hrService.spinner.show()

    await this.hrService.GetContactMessages()
    this.hrService.spinner.hide()

  }

  OpenDeleteDialog(id:number){
    this.messageid=id
    this.dialog.open(this.Deletedia)

  }
  async DeleteMessage(){

    await this.hrService.DeleteConatctMessage(this.messageid)
    this.hrService.GetContactMessages()

  }
}
