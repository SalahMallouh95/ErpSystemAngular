import { Component, ViewChild } from '@angular/core';
import { HrService } from 'src/app/hr.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styleUrls: ['./home-manage.component.css']
})
export class HomeManageComponent {
  @ViewChild('DeleteDio') Deletedia:any
  @ViewChild('CreateDio') Createdia:any
  @ViewChild('EditDio') Editdia:any

  homeFormGroup= new FormGroup({
    homeid:new FormControl(),
    titile:new FormControl(),
    description:new FormControl(),
    imagename:new FormControl()

  })
  
  count :number =0
  homeInfo:any

  constructor(public hrService:HrService,public dialog:MatDialog){}

  async ngOnInit(){
    await this.hrService.GetAllHome()
    this.count=this.hrService.allHome.length
    
  }

  CreateHomeDialog(){
     this.dialog.open(this.Createdia)
  }

  CreateHome(){
    this.hrService.CreateHome(this.homeFormGroup.value)
  }

  EdiDialog(id:number){
    this.homeInfo=this.hrService.allHome.find((h:any)=>h.homeid==id)
    this.homeFormGroup.patchValue(this.homeInfo)
    this.dialog.open(this.Editdia)
  }

  async UpdateHome()
  {
   await this.hrService.UpdateHome(this.homeInfo)
  }

  OpenDeleteDialog(id:number){
    this.dialog.open(this.Deletedia)
  }

  DeleteHome(){
      this.hrService.DeleteHome(this.homeInfo.homeid)
  }
}
