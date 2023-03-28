import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  @ViewChild('UpdateNews') Update:any
  NewsForm=new FormGroup({
    id:new FormControl(),
    msg:new FormControl()
  })
  

  constructor(public hrService:HrService,public dialog:MatDialog){}

  news: any= {}
  message : any | undefined

  async ngOnInit(){
    
    this.hrService.spinner.show()
    await this.hrService.GetAllNews()
    this.NewsForm.patchValue(this.hrService.AllNews[0])
    this.message = this.hrService.AllNews.msg
    console.log(this.hrService.AllNews.msg);
    
    this.hrService.spinner.hide()

  }

  async Updaten(){
    this.hrService.spinner.show()
    this.hrService.UpdateNews(this.NewsForm.value)
    await this.hrService.GetAllNews()
    this.hrService.spinner.hide()
  }


  openUpdateDialog(id:any)
  {
    this.hrService.spinner.show()
    this.news.annid=id
    this.dialog.open(this.Update);
    this.hrService.spinner.hide()
  }

}
