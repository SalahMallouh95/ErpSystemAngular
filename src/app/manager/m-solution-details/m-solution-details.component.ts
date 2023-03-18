import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-solution-details',
  templateUrl: './m-solution-details.component.html',
  styleUrls: ['./m-solution-details.component.css']
})
export class MSolutionDetailsComponent implements OnInit {
  constructor(public man : ManagerService, private route: ActivatedRoute,private rou : Router){

  }

  id: number| undefined
  tsln : any[] | undefined

  ngOnInit(): void {

    this.id= this.route.snapshot.params['id'];
    this.man.solutioninfo = this.man.allsln.filter( (s: { solutionid: number | undefined; }) => s.solutionid == this.id)

    console.log(this.man.solutioninfo);
    
    
  }



  SendSelecterSlnId(id : any){
    this.rou.navigate(['Manager/SolutionDetails'],id)

  }


}
