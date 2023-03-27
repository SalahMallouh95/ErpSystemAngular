import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HrService } from 'src/app/hr.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(private spinner: NgxSpinnerService,public hrService:HrService) {}
  async ngOnInit(){
    this.spinner.show()
   await this.hrService.GetAllHome()
   this.spinner.hide()

  }

  }

