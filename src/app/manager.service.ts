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

  solutioninfo: any
  taskid: number | undefined
  AllEmp: any = []
  documentName: any
  createTask: any = {}
  AllLeave: any = []
  MyLeaves: any = []
  AllTasks: any = []
  ManagerProfile: any = []
  empInformation: any = {}
  attendance: any = []
  leaveInfo: any
  taskinfo: any = {}
  allsln: any = []
  updateManProf: any = {}
  updatetask: any = {}


  async GetAllEmp(emp: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {

      this.http.post("https://localhost:44388/api/Manager/GetAllEmp", emp).subscribe(
        {
          next: (res) => {
            this.AllEmp = res
            resolve();
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




  async GetAllLeaves(lev: any) {

    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Manager/getLeaves", lev).subscribe(
        {
          next: (res) => {
            this.AllLeave = res
            resolve();
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


  async GetMyLeaves(ml: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post('https://localhost:44388/api/Employee/GetAllLeaves', ml).subscribe({
        next: (res) => {
          this.MyLeaves = res
          this.spinner.hide()
          resolve()
        },
        error: (err) => {
          console.log(err);
          this.toaster.success('Error')
        }
      })
      this.spinner.hide()
    })
  }



  async GetAllTasks(at: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post('https://localhost:44388/api/Manager/getAllTask', at).subscribe({
        next: res => {
          this.AllTasks = res
          resolve()
        },
        error: err => {
          console.log(err);
          this.toaster.error('Error')
        }
      })
    })
  }

  async GetManagerPrifile(mp: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post('https://localhost:44388/api/User/GetProfile', mp).subscribe({
        next: res => {
          this.ManagerProfile = res
          resolve()
          console.log(res);
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
            console.log(this.AllLeave);
          },
          error: (err) => {
            console.log(err);
            this.toaster.error('Error')
          }
        })
      this.spinner.show()
    })
  }



  async GetEmpInfo(ei: any) {
    let user: any = {}
    user.userid = ei
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post('https://localhost:44388/api/User/GetProfile', user).subscribe(
        {
          next: res => {
            this.empInformation = res
            resolve()
            console.log(this.empInformation);
            console.log(res);
          },
          error: (err) => {
            console.log(err);
            this.toaster.error('Error')
          }
        })
      this.spinner.show()
    })
  }




  async GetAttendance(at: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post('https://localhost:44388/api/User/GetAttendance', at).subscribe({
        next: res => {
          this.attendance = res
          resolve()
                },
        error: err => {
          console.log(err);
          this.toaster.error('Error')
          reject()
        }
      })
    })
  }


  async GetLeaveDetails(leave: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/Manager/getLeaveByID", leave).subscribe(
        {
          next: (res) => {
            this.leaveInfo = res;
            console.log(res);
            resolve();
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toaster.error('Error')
            reject();
          }
        })
      this.spinner.hide();
      console.log(this.leaveInfo);
    })
  }

  async UpdateLeaveDetails(leave: any) {
    console.log(leave);
    return new Promise<void>((resolve, reject) => {
      this.http.put("https://localhost:44388/api/Manager/updateleave", leave).subscribe(
        {
          next: () => {
            this.toaster.success('Updated')
            resolve();
          },
          error: (ee) => {
            console.log(ee)
            this.toaster.success("something want wrong")
            reject();
          }
        })
      this.spinner.hide();
    })
  }

  async GetTaskDetails(tas: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/Manager/GetTask", tas).subscribe({
        next: (res) => {
          this.taskinfo = res;
         
          resolve();
        },
        error: (ee) => {
          console.log(ee)
          this.toaster.error('Error')
          reject();
        }
      })
      this.spinner.show()
    })
  }

  async GetAllSolutions(as: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post('https://localhost:44388/api/Manager/getTaskSolution', as).subscribe({
        next: res => {
          this.allsln = res
          resolve()
        },
        error: err => {
          console.log(err);
          this.toaster.error('Error')
        }
      })
    })
  }

  async UpdateSolutionState(sln: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.put('https://localhost:44388/api/Manager/UpdateSolutionState', sln).subscribe({
        next: () => {
          this.toaster.success('Updated')
          resolve()
        },
        error: err => {
          console.log(err);
          reject()
        }
      })
      this.spinner.hide();
    })
  }
  async GetSolutionDetails(sln: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/Manager/OneSolution", sln).subscribe({
        next: res => {
          this.solutioninfo = res
          resolve()
        },
        error: err => {
          console.log(err);
          reject()
        }
      })
    })
  }



  async CreateTask(ct: any) {
    console.log(ct);
    return new Promise<void>((resolve, reject) => {
      this.http.post('https://localhost:44388/api/Manager/CreateTask', ct).subscribe({
        next: res => {
          this.createTask = res
          this.toaster.success('Created')
          resolve()
        },
        error: err => {
          console.log(err);
          reject()
        }
      })
    })
  }

  async Updateprofile(up: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put('https://localhost:44388/api/User/UpdateProfile', up).subscribe({
        next: res => {
          this.toaster.success('Updated')
          resolve()
        },
        error: err => {
          console.log(err);
          reject()
        }
      })
    })

  }

  async DeleteTask(id: number) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete('https://localhost:44388/api/Manager/DeleteTask?id=' + id).subscribe({
        next: res => {
          resolve()
          this.toaster.success('Task Deleted')
        },
        error: err => {
          console.log(err);
          this.toaster.error('Error')
          reject()

        }
      })
    })
  }


  async UpdateTask(ut: any) {
    return new Promise<void>((resolve, reject) => {
      this.http.put('https://localhost:44388/api/Manager/UpdateTask', ut).subscribe({
        next: res => {
          this.toaster.success('Updated')
          resolve()
        },
        error: err => {
          console.log(err);
          reject()
          this.toaster.error('Error')
        }
      })
    })
  }


  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////

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






}










