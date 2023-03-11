import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor() 
  { }
   mesage:string="test"
 
 
   allLeaves = [
    { "leaveid": 1, "startDate": "2222","endDate":"2222","Message":"tet","State":2,"documentFileName":"ss","leaveType":"lev","fName":"Salah","LName":"Malouh"},
    { "leaveid": 2, "startDate": "2222","endDate":"2222","Message":"tet2","State":0,"documentFileName":"ss2","leaveType":"lev2","fName":"mohamde","LName":"ma2"},
    { "leaveid": 3, "startDate": "2222","endDate":"2222","Message":"tet3","State":1,"documentFileName":"ss3","leaveType":"lev3","fName":"Moyeed","LName":"ma3"}
  ];

  allEmp=
  [
    {"userid":1,"fName":"salah","lName":"mallouh","salary":1000,"role":"Manager","Department":"IT","phoneNumber":"1234567890","address":"asda","Imagefilename":'t.png',"ssn":123456789,"state":0},
    {"userid":2,"fName":"moyeed","lName":"mallouh","salary":1000,"role":"employee","Department":"Hr","phoneNumber":"1234567890","address":"asda","Imagefilename":null,"ssn":123456789,"state":1},
    {"userid":3,"fName":"mohamed","lName":"mallouh","salary":1000,"role":"Hr","Department":"IT","phoneNumber":"1234567890","address":"asda","Imagefilename":"xx.png","ssn":123456789,"state":1}
  ]
}
