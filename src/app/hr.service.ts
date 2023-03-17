import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(public http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) {

  }
  mesage: string = "test"
  allEmp: any = []
  allDep: any = []
  allRole: any = []
  allLeaves: any = []
  allLeaveTypes: any = []


  empInfo: any
  leaveInfo: any
  depInfo: any

  async GetAllEmployee() {
    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/getuser").subscribe(
        {
          next: (res) => {
            this.allEmp = res
            resolve()
          },
          error: (ee) => {
            console.log(ee)
            reject()
          }
        }
      )
      this.spinner.hide();
    })

  }

  async GetAllDepartment() {
    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/HR/getdept").subscribe(
        {
          next: (res) => {
            this.allDep = res
            resolve()
          }
          ,
          error: (ee) => {
            console.log(ee)
            reject()
          }
        }
      )
      this.spinner.hide();
    })

  }
  GetAllRole() {
    this.spinner.show();

    this.http.get("https://localhost:44388/api/Hr/getdept").subscribe(
      {
        next: (res) => { this.allRole = res },
        error: (ee) => { console.log(ee) }
      }
    )
    this.spinner.hide();

  }

  GetEmpInfo(user: any) {
          this.spinner.show()

    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/User/GetProfile", user).subscribe(
        {
          next: (res) => {
            this.empInfo = res
            resolve();
          }
          ,
          error: (ee) => {
            console.log(ee)
            reject();
          }

        }
      )
      this.spinner.hide();

    })
  }

  GetAllLeaves() {
    this.spinner.show();

    this.http.get("https://localhost:44388/api/Hr/getleave").subscribe(
      {
        next: (res) => { this.allLeaves = res },
        error: (ee) => { console.log(ee) }
      }
    )
    this.spinner.hide();

  }

  GetAllLeaveTypes() {
    this.spinner.show();

    this.http.get("https://localhost:44388/api/Hr/getleavetype").subscribe(
      {
        next: (res) => { this.allLeaveTypes = res },
        error: (ee) => { console.log(ee) }
      }
    )
    this.spinner.hide();

  }

  async GetLeaveDetails(leave:any)
  {    
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/Hr/getoneleave", leave).subscribe(
        {
          next: (res) => {
            this.leaveInfo = res;
            resolve();
          }
          ,
          error: (ee) => {
            console.log(ee)
            reject();
          }

        }
      )
      this.spinner.hide();

    })

  }

  async UpdateLeaveDetails(leave:any)
  {   
           console.log(leave);
           
    return new Promise<void>((resolve, reject) => {
      this.http.put("https://localhost:44388/api/Hr/updateleave", leave).subscribe(
        {
          next: () => {
            this.toastr.success("Leave state updateded")
            resolve();
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toastr.success("something want wrong")

            reject();
          }

        }
      )
      this.spinner.hide();

    })

  }
  async CreateDep(dep: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Hr/createdept", dep).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Department Added successfully!');
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toastr.error('Somthing went wrong!');

            reject();
          }

        }
      )
      this.spinner.hide();

    })
  }
  async DeleteDep(id: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44388/api/Hr/deletedept?id=" + id).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Department deleted successfully!');
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toastr.error('Somthing went wrong!');

            reject();
          }

        }
      )
      this.spinner.hide();

    })
  }

  async Search(data:any)
  {
    console.log(data);

    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Hr/searchleave", data).subscribe(
        {
          next: (res) => {this.allLeaves=res
            resolve();           
            console.log(this.allLeaves)
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toastr.error('Somthing went wrong!');

            reject();
          }

        }
      )
      this.spinner.hide();

    })

  }

}
