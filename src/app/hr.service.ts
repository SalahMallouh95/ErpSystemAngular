import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(public http:HttpClient,private spinner: NgxSpinnerService) 
  {

   }
   mesage:string="test"
   allEmp:any =[]
   empInfo:any
   allDep:any=[]
   allRole:any=[]
 
   allLeaves = [
    { "leaveid": 1, "startDate": "2222","endDate":"2222","Message":"tet","State":2,"documentFileName":"ss","leaveType":"lev","fName":"Salah","LName":"Malouh"},
    { "leaveid": 2, "startDate": "2222","endDate":"2222","Message":"tet2","State":0,"documentFileName":"ss2","leaveType":"lev2","fName":"mohamde","LName":"ma2"},
    { "leaveid": 3, "startDate": "2222","endDate":"2222","Message":"tet3","State":1,"documentFileName":"ss3","leaveType":"lev3","fName":"Moyeed","LName":"ma3"}
  ];

 
GetAllEmployee(){
  this.spinner.show();

  
  this.http.get("https://localhost:44388/api/Hr/getuser").subscribe(
    {next:(res)=>{this.allEmp=res},
    error:(ee)=>{console.log(ee)}}
  )   
  this.spinner.hide();

}
GetAllDepartment(){
  this.spinner.show();
  
  this.http.get("https://localhost:44388/api/Hr/getdept").subscribe(
    {next:(res)=>{this.allDep=res}
    ,
    error:(ee)=>{console.log(ee)}}
  )   
  this.spinner.hide();

}
GetAllRole(){
  this.spinner.show();
  
  this.http.get("https://localhost:44388/api/Hr/getdept").subscribe(
    {next:(res)=>{this.allRole=res},
    error:(ee)=>{console.log(ee)}}
  )   
  this.spinner.hide();

}

GetEmpInfo(user:any)
{
  return new Promise<void>((resolve,reject)=>{
  this.spinner.show()
  this.http.post("https://localhost:44388/api/User/GetProfile",user).subscribe(
    {
      next:(res)=>{this.empInfo=res
        resolve();
      }
      ,
      error:(ee)=>{console.log(ee)
      reject();
      }
    
    }
  )
  this.spinner.hide();

})
}


}
