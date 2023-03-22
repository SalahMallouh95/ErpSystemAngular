import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-emp-info',
  templateUrl: './m-emp-info.component.html',
  styleUrls: ['./m-emp-info.component.css']
})
export class MEmpInfoComponent implements OnInit {

    constructor(private route: ActivatedRoute ,public man: ManagerService){

    }

    id : number| undefined
    emp : any | {}

    idatt: number | undefined
    att : any = {}


  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['id'];
    this.emp = this.man.empInfo.filter(  (ex) => ex.userid == this.id )
    this.info.patchValue(this.man.empInformation)    
    
  }

  info = new FormGroup({

    userid :new FormControl(),
    managerid :new FormControl(),
    fname :new FormControl({value: '', disabled: true}, Validators.required),
    lname :new FormControl({value: '', disabled: true}, Validators.required),
    ssn :new FormControl({value: '', disabled: true}, Validators.required),
    address :new FormControl({value: '', disabled: true}, Validators.required),
    phonenumber :new FormControl({value: '', disabled: true}, Validators.required),
    email : new FormControl({value: '', disabled: true}, Validators.required),
    imagefilename : new FormControl() 
  })
    

}
