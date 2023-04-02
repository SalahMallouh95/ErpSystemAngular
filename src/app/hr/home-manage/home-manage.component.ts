import { Component, ViewChild } from '@angular/core';
import { HrService } from 'src/app/hr.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-manage',
  templateUrl: './home-manage.component.html',
  styleUrls: ['./home-manage.component.css']
})
export class HomeManageComponent {
  @ViewChild('DeleteDio') Deletedia: any
  @ViewChild('CreateDio') Createdia: any
  @ViewChild('EditDio') Editdia: any

  homeFormGroup = new FormGroup({
    homeid: new FormControl(undefined),
    titile: new FormControl(),
    description: new FormControl(),
    imagename: new FormControl('', Validators.required)

  })

  count: number = 0
  homeInfo: any

  constructor(public hrService: HrService, public dialog: MatDialog) { }

  async ngOnInit() {
    this.hrService.spinner.show()

    await this.hrService.GetAllHome()
    this.hrService.documentName = {}
    this.hrService.documentName.imagefilename = null
    this.count = this.hrService.allHome.length
    this.hrService.spinner.hide()


  }

  CreateHomeDialog() {
    this.homeFormGroup.reset();
    this.dialog.open(this.Createdia)
  }

  async CreateHome() {
    if (this.hrService.documentName.imagefilename !== null && this.hrService.documentName.imagefilename !== undefined && this.hrService.documentName.imagefilename !== '') {
      this.homeFormGroup.value.imagename = this.hrService.documentName.imagefilename
    }
    await this.hrService.CreateHome(this.homeFormGroup.value)
    this.hrService.documentName.imagefilename = null
    this.homeFormGroup.reset()
    this.GetHome()

  }

  EdiDialog(id: number) {
    this.homeInfo = this.hrService.allHome.find((h: any) => h.homeid == id)
    this.homeFormGroup.patchValue(this.homeInfo)
    this.dialog.open(this.Editdia)
  }

  async UpdateHome() {
    if (this.hrService.documentName.imagefilename !== null && this.hrService.documentName.imagefilename !== undefined && this.hrService.documentName.imagefilename !== '') {
      this.homeFormGroup.value.imagename = this.hrService.documentName.imagefilename
    }
    await this.hrService.UpdateHome(this.homeFormGroup.value)
    this.hrService.documentName.imagefilename = null
    this.homeFormGroup.reset();
    this.GetHome()
  }

  async UploadPhoto(file: any) {
    let formData = new FormData();
    formData.append('file', file.files[0])
    await this.hrService.UploadDocument(formData)

  }

  OpenDeleteDialog(id: number) {
    this.homeInfo = this.hrService.allHome.find((h: any) => h.homeid == id)
    this.dialog.open(this.Deletedia)
  }

  async DeleteHome() {
    await this.hrService.DeleteHome(this.homeInfo.homeid)
    this.GetHome()
  }

  async GetHome() {
    this.hrService.spinner.show()

    await this.hrService.GetAllHome()
    this.count = this.hrService.allHome.length

    this.hrService.spinner.hide()


  }
}
