import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

 
  feed : any | undefined

  ngOnInit(): void {

    this.feed = this.man.solutioninfo.feedbackmessage

  }

  async AcceptSolution() {
    let user : any ={}
    user.userid = 2
    let sln: any = {}
    sln.taskid = this.man.solutioninfo.taskid
    sln.solutionid = this.man.solutioninfo.solutionid
    sln.state = 1
    sln.feedbackmessage = this.feed
    await this.man.UpdateSolutionState(sln)
    this.man.GetSolutionDetails(sln)
    await this.man.GetAllSolutions(sln)

  }

  async RejectSolution() {
    let user : any ={}
    user.userid = 2
    let sln: any = {}
    sln.taskid = this.man.solutioninfo.taskid
    sln.solutionid = this.man.solutioninfo.solutionid
    sln.state = 0
    sln.feedbackmessage = this.feed
    await this.man.UpdateSolutionState(sln)
    this.man.GetSolutionDetails(sln)
    await this.man.GetAllSolutions(sln)
  }

  
 
  
}
