import { Component, ViewChild } from '@angular/core';
import { HrService } from 'src/app/hr.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent {
  @ViewChild('DeleteDio') Deletedia:any
  @ViewChild('CreateDio') Createdia:any
  @ViewChild('EditDio') Editdia:any


  ServiceFormGroup = new FormGroup({
    id:new FormControl(undefined),
    name:new FormControl('',Validators.required),
    description:new FormControl()
  })

  constructor(public hrService:HrService,public dialog:MatDialog){}

  async ngOnInit(){
    await this.hrService.GetAllServices();  

  }

  OpenCreateDialog(){
   this.ServiceFormGroup.reset()
   this.dialog.open(this.Createdia)
   
  }
  OpenEditDialog(id:number){
    this.hrService.serviceInfo=this.hrService.allService.find((s:any)=>s.id==id)
    this.ServiceFormGroup.patchValue(this.hrService.serviceInfo)
    this.dialog.open(this.Editdia)
  }
  OpenDeleteDialog(id:number){
    this.hrService.serviceInfo=this.hrService.allService.find((s:any)=>s.id==id)
    this.dialog.open(this.Deletedia)
  }

  async CreateService(){
    console.log(this.ServiceFormGroup.value);
    
     await this.hrService.CreateService(this.ServiceFormGroup.value)
     this.ServiceFormGroup.reset()
     await this.hrService.GetAllServices();
  }

  async DeleteService(){
    await this.hrService.DeleteService(this.hrService.serviceInfo.id)
    await this.hrService.GetAllServices();
  }
  async EditService(){
    await this.hrService.UpdateService(this.ServiceFormGroup.value)
    await this.hrService.GetAllServices();
    this.ServiceFormGroup.reset()
  }
}
