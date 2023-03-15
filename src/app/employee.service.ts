import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public http:HttpClient,private spinner: NgxSpinnerService) 
  {

   }
  allLeaves = [
    { "leaveid": 1,"userid":1, "startDate": "34234","endDate":"32432","State":2,"documentFileName":"ss","message":"dfgdgtr","leaveType":"lev","fName":"Salah","LName":"Malouh"},
    { "leaveid": 2, "userid":1,"startDate": "23432","endDate":"353","State":0,"documentFileName":"ss2","message":"asdfas","leaveType":"lev2","fName":"mohamde","LName":"ma2"},
    { "leaveid": 3, "userid":1,"startDate": "2432","endDate":"234","State":1,"documentFileName":"ss3","message":"efewfewf","leaveType":"lev3","fName":"Moyeed","LName":"ma3"},
   { "leaveid": 3, "userid":2,"startDate": "2432","endDate":"234","State":1,"documentFileName":"ss3","message":"efewfewf","leaveType":"lev3","fName":"Moyeed","LName":"ma3"},
   { "leaveid": 3, "userid":3,"startDate": "2432","endDate":"234","State":1,"documentFileName":"ss3","message":"efewfewf","leaveType":"lev3","fName":"Moyeed","LName":"ma3"}


 ];
  allsultion = [
    { "solutionid": 1, "taskid": 1,"uploadDate":"32432","feedMessage":"tet","State":2,"documentFileName":"srfwes"},
    { "solutionid": 2, "taskid": 3,"uploadDate":"32432","feedMessage":"tet","State":0,"documentFileName":"ewfss"},   
    { "solutionid":3, "taskid": 2,"uploadDate":"32432","feedMessage":"tet","State":1,"documentFileName":"wefss"},  
  ];
  leavetype1 = [
    { "leaveid": 1, "leavetype": "ergregerg"},
    { "leaveid": 2, "leavetype": "wdewdwe"},   
    { "leaveid": 3, "leavetype": "edfwefwef"},  
    { "leaveid": 3, "leavetype": "sdsad"}
  ];
  alltask = [
    { "taskid": 1,"userid":1, "managerid": 1,"uploadDate":"32432","State":2,"documentFileName":"ssdvc","taskname":"dfgdgdcdstr","taskdesc":"legfbfv"},
    { "taskid": 2,"userid":2, "managerid": 1,"uploadDate":"32432","State":1,"documentFileName":"ssdvc","taskname":"dfgdgdcdstr","taskdesc":"legfbfv"},
    { "taskid": 3,"userid":1, "managerid": 1,"uploadDate":"32432","State":0,"documentFileName":"ssdvc","taskname":"dfgdgdcdstr","taskdesc":"legfbfv"},
    { "taskid": 4,"userid":1, "managerid": 1,"uploadDate":"32432","State":2,"documentFileName":"ssdvc","taskname":"dfgdgdcdstr","taskdesc":"legfbfv"},
    { "taskid": 5,"userid":1, "managerid": 1,"uploadDate":"32432","State":1,"documentFileName":"ssdvc","taskname":"dfgdgdcdstr","taskdesc":"legfbfv"},
    
  ];
  allleaves:any=[];
  GetAllleave(allleave:any){
    this.spinner.show();
    this.http.post("https://localhost:44388/api/Employee/GetAllLeaves",allleave).subscribe(
      {next:(res)=>{this.allleaves=res},
      error:(ee)=>{console.log(ee)}}
    )   
    this.spinner.hide();
  
  }
}
