import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-solution',
  templateUrl: './m-solution.component.html',
  styleUrls: ['./m-solution.component.css']
})
export class MSolutionComponent implements OnInit {

  constructor( public man : ManagerService ,private route : ActivatedRoute, private rou: Router ){


  }

  id: number | undefined
  tsln : any | {}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.tsln = this.man.sloutions.filter( s => s.sid == this.id )
    
  }

  SendSelecterSlnId(id : any){
    this.rou.navigate(['Manager/SolutionDetails',id])

  }

}
