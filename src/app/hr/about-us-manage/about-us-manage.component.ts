import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-about-us-manage',
  templateUrl: './about-us-manage.component.html',
  styleUrls: ['./about-us-manage.component.css']
})
export class AboutUsManageComponent {

   aboutForm=new FormGroup({
    aboutid:new FormControl(),
    description:new FormControl(),
    message:new FormControl(),
    phonenumber:new FormControl(),
    email:new FormControl(),
    address:new FormControl()
  })

  constructor(public hrService:HrService){}

  async ngOnInit(){
    this.hrService.spinner.show()
    await this.hrService.GetAbout()    
    this.aboutForm.patchValue(this.hrService.homeAbout)
    this.hrService.spinner.hide()

  }

  async UpdateAbout(){
    this.hrService.spinner.show()
    await this.hrService.UpdateAbout(this.aboutForm.value)
    await this.hrService.GetAbout()
    this.hrService.spinner.hide()


  }

}
