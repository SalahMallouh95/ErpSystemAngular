import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { MSolutionDetailsComponent } from '../m-solution-details/m-solution-details.component';

@Component({
  selector: 'app-m-solution',
  templateUrl: './m-solution.component.html',
  styleUrls: ['./m-solution.component.css']
})
export class MSolutionComponent implements OnInit {

  constructor( public man : ManagerService ,private route : ActivatedRoute, private rou: Router ,public dialog : MatDialog){


  }



  ngOnInit() {
    
  }

  async SendSelecterSlnId(id : any){
    let sln : any = {}
    sln.solutionid = id
    
    await this.man.GetSolutionDetails(sln)
   
    this.OpenMoreInfoDialog()
  }
  OpenMoreInfoDialog(){
    this.dialog.open(MSolutionDetailsComponent)
  }

  
}
