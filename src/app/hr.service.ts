import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor() { }
   mesage:string="test"
  allLeaves = [
    { "leaveid": 1, "startDate": Date.now,"endDate":Date.now,"Message":"tet","documentFileName":"ss","leaveType":"lev","fName":"sa","LName":"ma"},
    { "leaveid": 2, "startDate": Date.now,"endDate":Date.now,"Message":"tet2","documentFileName":"ss2","leaveType":"lev2","fName":"sa2","LName":"ma2"},
    { "leaveid": 3, "startDate": Date.now,"endDate":Date.now,"Message":"tet3","documentFileName":"ss3","leaveType":"lev3","fName":"sa3","LName":"ma3"}
  ];
}
