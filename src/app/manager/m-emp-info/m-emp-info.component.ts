import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-emp-info',
  templateUrl: './m-emp-info.component.html',
  styleUrls: ['./m-emp-info.component.css']
})
export class MEmpInfoComponent implements OnInit {

    constructor(private spinner: NgxSpinnerService,private route: ActivatedRoute ,public man: ManagerService)
    {
 this.dataSource = new MatTableDataSource(this.man.attendance);
    this.dataSource.paginator = this.paginator;
    }

    id : number| undefined
    emp : any | {}

    idatt: number | undefined
    att : any = {}
    @ViewChild(MatPaginator) paginator: MatPaginator | any;
    displayedColumns: string[] = ['Checkin', 'Checkout', 'Workinghour'];
    dataSource: any

  async ngOnInit() {
   this.spinner.show()
    this.id = this.route.snapshot.params['id'];
    this.emp = this.man.empInfo.filter(  (ex) => ex.userid == this.id )
    this.info.patchValue(this.man.empInformation)    
    this.spinner.hide()
   
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
