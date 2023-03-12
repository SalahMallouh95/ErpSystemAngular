import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-solution',
  templateUrl: './m-solution.component.html',
  styleUrls: ['./m-solution.component.css']
})
export class MSolutionComponent implements OnInit {

  constructor( public man : ManagerService ,private route : ActivatedRoute ){


  }

  id: number | undefined
  tsln : any | {}

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.tsln = this.man.sloutions.filter( s => s.sid == this.id )
    
  }

}
