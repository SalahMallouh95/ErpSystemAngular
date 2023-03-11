import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
   
    this.id = this.route.snapshot.params['id'];
    this.emp = this.man.empInfo.filter(  (ex) => ex.userid == this.id )
  }

    

}
