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

//arrays
  allEmp: any = []
  allDep: any = []
  allRole: any = []
  allLeaves: any = []
  allLeaveTypes: any = []
  allHome: any = []
  contactMessages:any
  allService:any
  allPayout:any


//object's
  empInfo: any
  leaveInfo: any
  depInfo: any
  documentName: any
  leaveTypeInfo: any
  homeInfo: any
  homeAbout: any
  contactMessageInfo:any
  serviceInfo:any|undefined
  systemUserInfo:any

  // ---------------------- Employee --------------------------


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

  async GetEmpInfo(user: any) {
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

  async UpdateEmpProfile(user: any) {

    this.spinner.show()

    return new Promise<void>((resolve, reject) => {
      this.http.put("https://localhost:44388/api/Hr/updateuser", user).subscribe(
        {
          next: () => {
            this.toastr.success("Profile updated successfully")
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

  async AddEmpProfile(user: any) {

    console.log(user);

    this.spinner.show()

    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/Hr/createuser", user).subscribe(
        {
          next: () => {
            this.toastr.success("Profile created successfully")
            resolve();
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toastr.error("something want wrong")
            reject();
          }

        }
      )
      this.spinner.hide();

    })
  }

  async DeleteEmpProfile(userid: any) {

    console.log(userid);

    this.spinner.show()

    return new Promise<void>((resolve, reject) => {
      this.http.delete("https://localhost:44388/api/Hr/deleteuser?id=" + userid).subscribe(
        {
          next: () => {
            this.toastr.success("Profile deleted successfully")
            resolve();
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toastr.error("something want wrong")
            reject();
          }

        }
      )
      this.spinner.hide();

    })
  }

  // ---------------------- Leave --------------------------

  async GetAllLeaves() {
    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/getleave").subscribe(
        {
          next: (res) => {
            this.allLeaves = res
            resolve();
          },
          error: (ee) => {
            console.log(ee)
            reject();
          }
        }
      )
      this.spinner.hide();
    })

  }

  async GetAllLeaveTypes() {
    this.spinner.show();

    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/getleavetype").subscribe(
        {
          next: (res) => {
            this.allLeaveTypes = res
            resolve();
          },
          error: (ee) => {
            console.log(ee)
            reject();
          }
        }
      )
      this.spinner.hide();
    })
  }

  async CreateLeaveType(lev: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Hr/createleavetype", lev).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Leave type Added successfully!');
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

  async UpdateLeaveType(lev: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44388/api/Hr/updateleavetype", lev).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Leave type updateded successfully!');
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

  async DeleteLeaveType(levid: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44388/api/Hr/deleteleavetype?id=" + levid).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Leave type deleted successfully!');
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

  async GetLeaveDetails(leave: any) {
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

  async UpdateLeaveDetails(leave: any) {
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

  async Search(data: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Hr/searchleave", data).subscribe(
        {
          next: (res) => {
            this.allLeaves = res
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


  // ---------------------- Department --------------------------

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
  async EditDep(dep: any) {
    console.log(dep);

    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44388/api/Hr/updatedept", dep).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Department updated successfully!');
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

  async UploadDocument(file: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/User/uploadFile", file).subscribe(
        {
          next: (res) => {
            this.documentName = res
            this.toastr.success('File uploaded!');
            resolve();
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

  async GetAllRole() {
    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/getRole").subscribe(
        {
          next: (res) => {
            this.allRole = res
            resolve();

          },
          error: (ee) => {
            console.log(ee)
            reject();

          }
        }
      )
      this.spinner.hide();
    })
  }
  // ---------------------- Home Page --------------------------

  async GetAllHome() {

    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/gethome").subscribe(
        {
          next: (res) => {
            this.allHome = res
            resolve();

          },
          error: (ee) => {
            console.log(ee)
            reject();

          }
        }
      )
      this.spinner.hide();
    })

  }

  async CreateHome(home: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Hr/createhome", home).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Home Added successfully!');
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
  async UpdateHome(home: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44388/api/Hr/updatehome", home).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Home updateded successfully!');
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
  async DeleteHome(id: number) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44388/api/Hr/deletehome?id=" + id).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Home deleted successfully!');
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

  async GetAbout() {

    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/getabout").subscribe(
        {
          next: (res) => {
            this.homeAbout = res
            resolve();

          },
          error: (ee) => {
            console.log(ee)
            reject();

          }
        }
      )
      this.spinner.hide();
    })
  }

  async UpdateAbout(about: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44388/api/Hr/updateabout", about).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('About info updateded successfully!');
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

  SendMessageContactUs(message:any){
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/User/sendMessage", message).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Message was sent successfully!');
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

  async GetContactMessages() {

    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/getcontact").subscribe(
        {
          next: (res) => {
            this.contactMessages = res
            resolve();

          },
          error: (ee) => {
            console.log(ee)
            reject();

          }
        }
      )
      this.spinner.hide();
    })
  }
  DeleteConatctMessage(id:number){
    
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44388/api/User/DeleteMessage?id=" + id).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Message deleteded successfully!');
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


  async GetAllServices() {

    this.spinner.show();
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/GetService").subscribe(
        {
          next: (res) => {
            this.allService = res
            resolve();

          },
          error: (ee) => {
            console.log(ee)
            reject();

          }
        }
      )
      this.spinner.hide();
    })

  }

  async CreateService(Service: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.post("https://localhost:44388/api/Hr/CreateService", Service).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Service Added successfully!');
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
  async UpdateService(Service: any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.put("https://localhost:44388/api/Hr/UpdateService", Service).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Service updateded successfully!');
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
  async DeleteService(id: number) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show()
      this.http.delete("https://localhost:44388/api/Hr/DeleteService?id=" + id).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Service deleted successfully!');
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

//-------------- Payment -----------------
async GetPayout() {
  this.spinner.show();
  return new Promise<void>((resolve, reject) => {
    this.http.get("https://localhost:44388/api/Hr/getpayout").subscribe(
      {
        next: (res) => {
          this.allPayout = res
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
}
