import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  employees : any= [
    {
      fName: 'Ahmad',
      lName: 'Ali',
      email: 'aa@aa.com',
      ssn: 10001,
      state: 0

    },
    {
      fName: 'Salah',
      lName: 'Mallouh',
      email: 'ss@mm.com',
      ssn: 10002,
      state: 0

    },
    {
      fName: 'Moayad',
      lName: 'Khateeb',
      email: 'mm@kk.com',
      ssn: 10003,
      state: 1

    },
    {
      fName: 'Mohammad',
      lName: 'Mashtooli',
      email: 'mm@mm.com',
      ssn: 10004,
      state: 1

    }
  ];


  allLeaves = [
    { "leaveid": 1, "startDate": "2222","endDate":"2222","Message":"tet","State":2,"documentFileName":"ss","leaveType":"lev","fName":"Salah","LName":"Malouh"},
    { "leaveid": 2, "startDate": "2222","endDate":"2222","Message":"tet2","State":0,"documentFileName":"ss2","leaveType":"lev2","fName":"mohamde","LName":"ma2"},
    { "leaveid": 3, "startDate": "2222","endDate":"2222","Message":"tet3","State":1,"documentFileName":"ss3","leaveType":"lev3","fName":"Moyeed","LName":"ma3"}
  ];


  myLeaves = [
    { "leaveid": 1, "startDate": "2222","endDate":"2222","State":1},
    { "leaveid": 2, "startDate": "2222","endDate":"2222","State":0},
    { "leaveid": 3, "startDate": "2222","endDate":"2222","State":2},
    { "leaveid": 4, "startDate": "2222","endDate":"2222","State":0},
    { "leaveid": 5, "startDate": "2222","endDate":"2222","State":1}
  ];
}
