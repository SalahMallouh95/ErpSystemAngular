import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor() { }

  employees : any= [
    {
      userid: 1,
      fName: 'Ahmad',
      lName: 'Ali',
      email: 'aa@aa.com',
      ssn: 10001,
      state: 0

    },
    {
      userid: 2,
      fName: 'Salah',
      lName: 'Mallouh',
      email: 'ss@mm.com',
      ssn: 10002,
      state: 0

    },
    {
      userid: 3,
      fName: 'Moayad',
      lName: 'Khateeb',
      email: 'mm@kk.com',
      ssn: 10003,
      state: 1

    },
    {
      userid: 4,
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
    {  userid:1,"leaveid": 1, "startDate": "2222","endDate":"2222","State":1,"Message":"tet","documentFileName":"ss","leaveType":"lev"},
    {  userid:1,"leaveid": 2, "startDate": "2222","endDate":"2222","State":0,"Message":"tet","documentFileName":"ss","leaveType":"lev"},
    {  userid:1,"leaveid": 3, "startDate": "2222","endDate":"2222","State":2,"Message":"tet","documentFileName":"ss","leaveType":"lev"},
    {  userid:1,"leaveid": 4, "startDate": "2222","endDate":"2222","State":0,"Message":"tet","documentFileName":"ss","leaveType":"lev"},
    {  userid:1,"leaveid": 5, "startDate": "2222","endDate":"2222","State":1,"Message":"tet","documentFileName":"ss","leaveType":"lev"}
  ];



  empInfo = [
    { userid: 1,
      fName: 'Ahmad',
      lName: 'Ali',
      email: 'aa@aa.com',
      ssn: 10001,
      address: 'irbid'

    },
    {
      userid: 2,
      fName: 'Salah',
      lName: 'Mallouh',
      email: 'ss@mm.com',
      ssn: 10002,
      address: 'irbid'

    },
    {
      userid: 3,
      fName: 'Moayad',
      lName: 'Khateeb',
      email: 'mm@kk.com',
      ssn: 10003,
      address: 'amman'

    },
    {
      userid: 4,
      fName: 'Mohammad',
      lName: 'Mashtooli',
      email: 'mm@mm.com',
      ssn: 10004,
      address: 'amman'

    }
  ];











  tasks = [
    {
       userid: 1,
      name : 'ali ahmad'
    },
    {
      userid: 2,
      name: 'Salah Mallouh'
    },
    {
      userid: 3,
      name: 'Moayad Khateeb'

    },
    {
      userid: 4,
      name: 'Mohammad Mashtooli'

    }
  ];





  task = [
    {
      tid: 1,
      managerid:1,
      userid:1,
      uploaddeate:'',
      docFileName:'assdad',
      desc:'vdsvdsdvds',
      name : 'ali ahmad',
      tName: 'task1',
      state: 0,
      startDate: new Date(2022,1,3),
      endDate: new Date(2022,2,3)
    },
    {
      tid: 2,
      managerid:1,
      userid:1,
      uploaddeate:'',
      docFileName:'assdad',
      desc:'vdsvdsdvds',
      name: 'Salah Mallouh',
      tName: 'task2',
      state: 2,
      startDate: '12-2-2022',
      endDate: '3/3/2022'
    },
    {
      tid: 3,
      managerid:2,
      userid:3,
      uploaddeate:'',
      docFileName:'assdad',
      desc:'vdsvdsdvds',
      name: 'Moayad Khateeb',
      tName: 'task3',
      state: 1,
      startDate: '11-2-2022',
      endDate: '13-2-2022'

    },
    {
      tid: 4,
      managerid:3,
      userid:4,
      uploaddeate:'',
      docFileName:'assdad',
      desc:'vdsvdsdvds',
      name: 'Mohammad Mashtooli',
      tName: 'task4',
      state: 1,
      startDate: '14-2-2022',
      endDate: '30-2-2022'

    }
  ];
}










