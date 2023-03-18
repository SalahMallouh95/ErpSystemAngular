import { ListKeyManager } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toaster: ToastrService) { }





  AllEmp: any = []

  async GetAllEmp(emp: any) {

    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post("https://localhost:44388/api/Manager/GetAllEmp", emp).subscribe(
        {
          next: (res) => {
            this.AllEmp = res
            resolve();
            this.toaster.success('List Of All EMployees');
          },

          error: (err) => {
            console.log(err);
            this.toaster.success('Error')

            reject();
          }
        }
      )

      this.spinner.hide()

    })
  }


  AllLeave: any = []

  async GetAllLeaves(lev: any) {

    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post("https://localhost:44388/api/Manager/getLeaves", lev).subscribe(
        {
          next: (res) => {
            this.AllLeave = res
            resolve();
            this.toaster.success('List Of All Leaves');
          },

          error: (err) => {
            console.log(err);
            this.toaster.success('Error')

            reject();
          }
        }
      )

      this.spinner.hide()

    })

  }

  MyLeaves: any = []
  async GetMyLeaves(ml: any) {

    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post('https://localhost:44388/api/Employee/GetAllLeaves', ml).subscribe({

        next: (res) => {
          this.MyLeaves = res
          resolve()
          this.toaster.success('List Of My Leaves')
        },

        error: (err) => {
          console.log(err);
          this.toaster.success('Error')

        }

      }

      )

      this.spinner.hide()
    })
  }


  AllTasks: any = []
  async GetAllTasks(at: any) {
    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post('https://localhost:44388/api/Manager/getAllTask', at).subscribe({

        next: res => {
          this.AllTasks = res
          resolve()

          this.toaster.success('List Of All Tasks')
        },

        error: err => {
          console.log(err);
          this.toaster.error('Error')

        }
      })
    })
  }

  ManagerProfile: any = []
  async GetManagerPrifile(mp: any) {

    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post('https://localhost:44388/api/User/GetProfile', mp).subscribe({

        next: res => {
          this.ManagerProfile = res
          resolve()

        }
      })

      this.spinner.hide()
    })
  }


  async Searchs(data: any) {

    console.log(data);

    data.managerid = 2

    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Manager/searchleave", data).subscribe(
        {
          next: res => {
            this.AllLeave = res
            resolve()
            this.toaster.success('success')
            console.log(this.AllLeave);

          },

          error: (err) => {
            console.log(err);
            this.toaster.error('Error')

          }
        }
      )
      this.spinner.show()
    })

  }



  empInformation: any = {}

  async GetEmpInfo(ei: any) {
    let user : any = {}
    user.userid = ei
    return new Promise<void>((resolve, reject) => {

      this.spinner.show()
      this.http.post('https://localhost:44388/api/User/GetProfile', user).subscribe(
        {
          next: res => {
            this.empInformation = res
            resolve()
            this.toaster.success('success')
            console.log(this.empInformation);
            console.log(res);
            

          },

          error: (err) => {
            console.log(err);
            this.toaster.error('Error')

          }
        }
      )
      this.spinner.show()
    })
  }


  attendance : any= []

  async GetAttendance(at : any){
    return new Promise<void>((resolve,reject)=> {

      this.spinner.show()
      this.http.post('https://localhost:44388/api/User/GetAttendance',at).subscribe({

      next: res =>{
        this.attendance =res
        resolve()
        this.toaster.success('success')
        console.log(res);
        

      },

      error: err =>{
        console.log(err);
        this.toaster.error('Error')
        
      }
      })
    })

  }

  ///////////////////////////////////////////////////////////////////

  employees: any = [
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
    { "leaveid": 1, "startDate": "2222", "endDate": "2222", "Message": "tet", "State": 2, "documentFileName": "ss", "leaveType": "lev", "fName": "Salah", "LName": "Malouh" },
    { "leaveid": 2, "startDate": "2222", "endDate": "2222", "Message": "tet2", "State": 0, "documentFileName": "ss2", "leaveType": "lev2", "fName": "mohamde", "LName": "ma2" },
    { "leaveid": 3, "startDate": "2222", "endDate": "2222", "Message": "tet3", "State": 1, "documentFileName": "ss3", "leaveType": "lev3", "fName": "Moyeed", "LName": "ma3" }
  ];

  myLeaves = [
    { userid: 1, "leaveid": 1, "startDate": "2222", "endDate": "2222", "State": 1, "Message": "tet", "documentFileName": "ss", "leaveType": "lev" },
    { userid: 1, "leaveid": 2, "startDate": "2222", "endDate": "2222", "State": 0, "Message": "tet", "documentFileName": "ss", "leaveType": "lev" },
    { userid: 1, "leaveid": 3, "startDate": "2222", "endDate": "2222", "State": 2, "Message": "tet", "documentFileName": "ss", "leaveType": "lev" },
    { userid: 1, "leaveid": 4, "startDate": "2222", "endDate": "2222", "State": 0, "Message": "tet", "documentFileName": "ss", "leaveType": "lev" },
    { userid: 1, "leaveid": 5, "startDate": "2222", "endDate": "2222", "State": 1, "Message": "tet", "documentFileName": "ss", "leaveType": "lev" }
  ];

  empInfo = [
    {
      userid: 1,
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
      name: 'ali ahmad'
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
      managerid: 1,
      userid: 1,
      uploaddeate: '',
      docFileName: 'assdad',
      desc: 'vdsvdsdvds',
      name: 'ali ahmad',
      tName: 'task1',
      state: 0,
      startDate: new Date(2022, 1, 3),
      endDate: new Date(2022, 2, 3)
    },
    {
      tid: 2,
      managerid: 1,
      userid: 1,
      uploaddeate: '',
      docFileName: 'assdad',
      desc: 'vdsvdsdvds',
      name: 'Salah Mallouh',
      tName: 'task2',
      state: 2,
      startDate: '12-2-2022',
      endDate: '3/3/2022'
    },
    {
      tid: 3,
      managerid: 2,
      userid: 3,
      uploaddeate: '',
      docFileName: 'assdad',
      desc: 'vdsvdsdvds',
      name: 'Moayad Khateeb',
      tName: 'task3',
      state: 1,
      startDate: '11-2-2022',
      endDate: '13-2-2022'

    },
    {
      tid: 4,
      managerid: 3,
      userid: 4,
      uploaddeate: '',
      docFileName: 'assdad',
      desc: 'vdsvdsdvds',
      name: 'Mohammad Mashtooli',
      tName: 'task4',
      state: 1,
      startDate: '14-2-2022',
      endDate: '30-2-2022'

    }
  ];

  sloutions = [

    {
      sid: 1,
      tid: 1,
      state: 1,
      uploudDate: new Date(2022, 3, 1),
      feedBack: 'good job',
      docFileName: 'sdfsdfsdfs'
    }, {
      sid: 2,
      tid: 1,
      state: 2,
      uploudDate: new Date(2022, 3, 1),
      feedBack: 'good job',
      docFileName: 'sdfsdfsdfs'
    }, {
      sid: 1,
      tid: 2,
      state: 0,
      uploudDate: new Date(2022, 3, 1),
      feedBack: 'good job',
      docFileName: 'sdfsdfsdfs'
    },
    {
      sid: 2,
      tid: 2,
      state: 2,
      uploudDate: new Date(2022, 3, 1),
      feedBack: 'good job',
      docFileName: 'sdfsdfsdfs'
    },
  ]

  profile =
    [
      { "userid": 1, fName: "salah", "lName": "mallouh", "salary": 1000, "role": "Manager", "Department": "IT", "phoneNumber": "1234567890", "address": "asda", "Imagefilename": 't.png', "ssn": 123456789, "state": 0, email: 'as@as', BANKINFOID: 1234 }
    ]


  ///////////////////////////////////////////////////////////////////////




}










