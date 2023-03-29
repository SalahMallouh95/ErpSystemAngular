import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-solution-details',
  templateUrl: './m-solution-details.component.html',
  styleUrls: ['./m-solution-details.component.css']
})
export class MSolutionDetailsComponent implements OnInit {
  constructor(public man : ManagerService, private route: ActivatedRoute,private rou : Router,private auth : AuthService){

  }

 
  feed : any | undefined

  ngOnInit(): void {

    this.feed = this.man.solutioninfo.feedbackmessage

  }

  async AcceptSolution() {
    this.man.spinner.show()
    let user : any ={}
    user.userid =  this.auth.systemUserInfo.userid
    let sln: any = {}
    sln.taskid = this.man.solutioninfo.taskid
    sln.solutionid = this.man.solutioninfo.solutionid
    sln.state = 1
    sln.feedbackmessage = this.feed
    await this.man.UpdateSolutionState(sln)
    this.man.GetSolutionDetails(sln)
    await this.man.GetAllSolutions(sln)
    this.man.spinner.hide()

  }

  async RejectSolution() {
    this.man.spinner.show()
    let user : any ={}
    user.userid =  this.auth.systemUserInfo.userid
    let sln: any = {}
    sln.taskid = this.man.solutioninfo.taskid
    sln.solutionid = this.man.solutioninfo.solutionid
    sln.state = 0
    sln.feedbackmessage = this.feed
    await this.man.UpdateSolutionState(sln)
    this.man.GetSolutionDetails(sln)
    await this.man.GetAllSolutions(sln)
    this.man.spinner.hide()
  }

  
 
  
}
