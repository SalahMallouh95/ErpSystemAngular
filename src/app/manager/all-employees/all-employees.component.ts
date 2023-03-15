import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ManagerService } from 'src/app/manager.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {

  constructor(private route :Router ,public managerService : ManagerService ){

  }

user : any = {}
id : number = 2

  GetValues(id:any){
    this.route.navigate(['Manager/EmpInfo',id]);

    console.log(id);
    
  }



 ngOnInit(){
  this.user.userid = this.id
  this.managerService.GetAllEmp(this.user)
  
 }

}
