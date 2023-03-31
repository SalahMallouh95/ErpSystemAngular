import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient, private spinner: NgxSpinnerService, private toaster: ToastrService) {

  }
  myPayout : any 
  
  allleaves: any = [];
  GetAllleave(allleave: any) {
    this.spinner.show();
    this.http.post("https://localhost:44388/api/Employee/GetAllLeaves", allleave).subscribe(
      {
        next: (res) => { this.allleaves = res },
        error: (ee) => { console.log(ee) }
      }
    )
    this.spinner.hide();

  }
  alltask1: any = [];
  GetAlltask(alltask: any) {
    this.spinner.show();
    this.http.post("https://localhost:44388/api/Employee/GetAllTasks", alltask).subscribe(
      {
        next: (res) => { this.alltask1 = res },
        error: (ee) => { console.log(ee) }
      }
    )
    this.spinner.hide();

  }
  allSol: any = [];
  onesol :any
  GetSolution(allsol: any) {
    this.spinner.show();
    this.http.post("https://localhost:44388/api/Employee/GetAllSolutions", allsol).subscribe(
      {
        next: (res) => { this.allSol = res },
        error: (ee) => { console.log(ee) }
      }
    )
    this.spinner.hide();

  }
  leave: any = {} // {} 
  async GetleaveById(leaves: any)//10
  {
    return new Promise<void>((resolve, reject) => {
      
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Hr/getoneleave", leaves).subscribe(
        {
          next: (res) => {
            this.leave = res
            this.spinner.hide()
            this.toaster.success("Success")
            resolve()
          },

          error: (err) => {
            console.log(err)
            this.spinner.hide()
            this.toaster.error("Error")
            reject()
          }
        }
      )

    })
  }
  task: any= {} // {} 
  async GettaskById(tasks:any)//10
  {
   return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Employee/GetOneTask" ,tasks).subscribe(
        {
          next: (res) => {
            this.task = res
            this.spinner.hide()
             resolve()
          },

          error: (err) => {
            console.log(err)
            this.spinner.hide()
            this.toaster.error("Error")
            reject()
          }
        }
      )
      
       })
}

  async Search(data: any) {
    console.log(data);

    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Employee/searchleave", data).subscribe(
        {
          next: (res) => {
            this.allleaves = res
            resolve();
            console.log(this.allleaves)
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toaster.error('Somthing went wrong!');

            reject();
          }

        }
      )
      this.spinner.hide();

    })

  }
  async CreateLeave(leave: any) // 
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Employee/CreateLeave", leave).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Added Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
          }
        }
      )
    })
  }
  async CreateSolution(solution: any) // 
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Employee/CreateSolution", solution).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Added Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
          }
        }
      )
    })
  }
  async checkout(user: any) // 
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44388/api/Employee/UpdateCheckOut", user).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Checkedout Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
          }
        }
      )
    })
  }
  async Checkin(user: any) // 
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Employee/CreateCheckIn", user).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Checkedin Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
          }
        }
      )
    })
  }
  async UpdateLeave(leave: any) // 
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      console.log(this.leave)
      this.http.put("https://localhost:44388/api/Employee/UpdateLeave", leave).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Edit Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
            reject();
          }
        }
      )
    })
  }
  async UpdateSolution(solution: any) // 
  {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      console.log(this.leave)
      this.http.put("https://localhost:44388/api/Employee/UpdateSolution", solution).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Edit Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
            reject();
          }
        }
      )
    })
  }
  async DeleteLeave(id: number) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44388/api/Employee/DeleteLeave?id=" + id).subscribe(
        {

          next: () => {

            this.spinner.hide()
            this.toaster.success("delete Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
            reject()
          }
        }
      )
    })
  }
  async DeleteSolution(id: number) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44388/api/Employee/DeleteSolution?id=" + id).subscribe(
        {

          next: () => {

            this.spinner.hide()
            this.toaster.success("delete Successfully")
            resolve();
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("error")
            reject()
          }
        }
      )
    })
  }
  
}
