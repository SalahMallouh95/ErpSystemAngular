import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {

   }

   allLeaves = [
    { "leaveid": 1, "startDate": "34234","endDate":"32432","State":2,"documentFileName":"ss","message":"dfgdgtr","leaveType":"lev","fName":"Salah","LName":"Malouh"},
    { "leaveid": 2, "startDate": "23432","endDate":"353","State":0,"documentFileName":"ss2","message":"asdfas","leaveType":"lev2","fName":"mohamde","LName":"ma2"},
    { "leaveid": 3, "startDate": "2432","endDate":"234","State":1,"documentFileName":"ss3","message":"efewfewf","leaveType":"lev3","fName":"Moyeed","LName":"ma3"}
  ];
  allsultion = [
    { "solutionid": 1, "taskid": "34234","uploadDate":"32432","feedMessage":"tet","State":2,"documentFileName":"srfwes"},
    { "solutionid": 2, "taskid": "34234","uploadDate":"32432","feedMessage":"tet","State":0,"documentFileName":"ewfss"},   
    { "solutionid":3, "taskid": "34234","uploadDate":"32432","feedMessage":"tet","State":1,"documentFileName":"wefss"},  ];
}
