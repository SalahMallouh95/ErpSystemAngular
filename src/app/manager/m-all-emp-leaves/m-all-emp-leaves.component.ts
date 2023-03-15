import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-m-all-emp-leaves',
  templateUrl: './m-all-emp-leaves.component.html',
  styleUrls: ['./m-all-emp-leaves.component.css']
})
export class MAllEmpLeavesComponent implements OnInit {

  constructor( private router:Router, public managerService : ManagerService ){



  }

  leaves : any ={}
  id : number = 2

  ngOnInit(){

    this.leaves.userid = this.id
    this.managerService.GetAllLeaves(this.leaves)
    
  }



  GetValues(id :any){
    this.router.navigate(['Manager/LeaveDetails',id]);
    console.log(id);
    
  }



}
