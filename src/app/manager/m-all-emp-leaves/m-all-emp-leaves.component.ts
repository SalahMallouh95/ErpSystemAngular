import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  range = new FormGroup({
   
    dateTo: new FormControl<Date | null>(null),
    dateFrom: new FormControl<Date | null>(null)
  });

  async Search(){
    
    await this.managerService.Searchs(this.range.value)
  }


  GetValues(id :any){
    this.router.navigate(['Manager/LeaveDetails',id]);
    console.log(id);
    
  }



}
