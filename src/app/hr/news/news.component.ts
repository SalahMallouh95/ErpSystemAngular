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

  @ViewChild('UpdateNews') Update: any
  @ViewChild('DeleteDio') Deletedia: any
  @ViewChild('CreateDio') Createdia: any
  NewsForm = new FormGroup({
    annid: new FormControl(),
    msg: new FormControl()
  })


  constructor(public hrService: HrService, public dialog: MatDialog) { }

  news: any = {}
  message: any | undefined

  async ngOnInit() {

    this.hrService.spinner.show()
    await this.hrService.GetAllNews()
    this.message = this.hrService.AllNews.msg

    this.hrService.spinner.hide()

  }

  async Updaten() {
    this.hrService.spinner.show()
    await this.hrService.UpdateNews(this.NewsForm.value)
    this.NewsForm.reset()
    await this.hrService.GetAllNews()
    this.hrService.spinner.hide()
  }


  openUpdateDialog(id: any) {
    this.hrService.spinner.show()
    this.news = this.hrService.AllNews.find((n: any) => n.annid == id)
    this.NewsForm.patchValue(this.news)
    this.dialog.open(this.Update);
    this.hrService.spinner.hide()
  }

  async deleteNews() {

    this.hrService.spinner.show()

    await this.hrService.DeleteNews(this.news.annid)
    await this.hrService.GetAllNews()
    this.hrService.spinner.hide()
  }

  OpenDeleteDialog(id: any) {
    this.hrService.spinner.show()
    this.news.annid = id
    this.dialog.open(this.Deletedia);
    this.hrService.spinner.hide()
  }


  async CreateN() {

    this.hrService.spinner.show()
    await this.hrService.CreateNews(this.NewsForm.value)
    this.NewsForm.reset()
    await this.hrService.GetAllNews()
    this.hrService.spinner.hide()
  }


  OpenCreateDia() {
    this.hrService.spinner.show()
    this.dialog.open(this.Createdia)
    this.hrService.spinner.hide()
  }
}
