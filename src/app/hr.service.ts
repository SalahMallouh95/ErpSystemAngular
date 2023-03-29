import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(public http: HttpClient, public spinner: NgxSpinnerService, private toastr: ToastrService) {

  }

  //arrays
  allEmp: any = []
  allDep: any = []
  allRole: any = []
  allLeaves: any = []
  allLeaveTypes: any = []
  allHome: any = [{ "imagename": "", "titile": null, "description": null }]
  contactMessages: any
  allService: any
  allPayout: any
  AllNews: any = []
  allIban:any
  OneNews : any={}


  //object's
  empInfo: any
  leaveInfo: any
  depInfo: any
  documentName: any
  leaveTypeInfo: any
  homeInfo: any
  homeAbout: any = { "email": null, "phonenumber": null, "address": null }
  contactMessageInfo: any
  serviceInfo: any | undefined
  bankBalance: any
  newUserId:any

  // ---------------------- Employee --------------------------

  async GetAllEmployee() {

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

    })

  }

  async GetEmpInfo(user: any) {


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


    })
  }

  async UpdateEmpProfile(user: any) {

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


    })
  }

  async AddEmpProfile(user: any) {

    console.log(user);


    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/Hr/createuser", user).subscribe(
        {
          next: (res) => {
            this.newUserId=res
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


    })
  }

  async DeleteEmpProfile(userid: any) {

    console.log(userid);



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


    })
  }

  // ---------------------- Leave --------------------------

  async GetAllLeaves() {

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
    })
  }

  async GetAllLeaveTypes() {
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
    })
  }

  async CreateLeaveType(lev: any) {
    return new Promise<void>((resolve, reject) => {

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
        })
  }

  async UpdateLeaveType(lev: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }

  async DeleteLeaveType(levid: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }

  async GetLeaveDetails(leave: any) {

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


    })

  }

  async Search(data: any) {
    return new Promise<void>((resolve, reject) => {

      this.http.post("https://localhost:44388/api/Hr/searchleave", data).subscribe(
        {
          next: (res) => {
            this.allLeaves = res
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


    })

  }


  // ---------------------- Department --------------------------

  async GetAllDepartment() {


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

    })

  }

  async CreateDep(dep: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }
  async DeleteDep(id: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }
  async EditDep(dep: any) {
    console.log(dep);

    return new Promise<void>((resolve, reject) => {

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


    })
  }

  async UploadDocument(file: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }

  async GetAllRole() {

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

    })
  }
  // ---------------------- Home Page --------------------------

  async GetAllHome() {


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

    })

  }

  async CreateHome(home: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }
  async UpdateHome(home: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }
  async DeleteHome(id: number) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }

  async GetAbout() {


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

    })
  }

  async UpdateAbout(about: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }

  SendMessageContactUs(message: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }

  async GetContactMessages() {


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

    })
  }
  DeleteConatctMessage(id: number) {

    return new Promise<void>((resolve, reject) => {

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


    })
  }


  async GetAllServices() {


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

    })

  }

  async CreateService(Service: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }
  async UpdateService(Service: any) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }
  async DeleteService(id: number) {
    return new Promise<void>((resolve, reject) => {

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


    })
  }

  //-------------- Payment -----------------
  async GetPayout(payout: any) {

    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/Hr/getpayout", payout).subscribe(
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

    })

  }

  async GetBlance() {

    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/GetBalance").subscribe(
        {
          next: (res) => {
            this.bankBalance = res
            resolve()
          },
          error: (ee) => {
            console.log(ee)
            reject()
          }
        }
      )

    })
  }
  async TransferSalary() {
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/TransferSalary").subscribe(
        {
          next: () => {
            resolve()
          },
          error: (ee) => {
            console.log(ee)
            reject()
          }
        }
      )

    })
  }

  async GetAllIban(){
    return new Promise<void>((resolve, reject) => {
      this.http.get("https://localhost:44388/api/Hr/GetIban").subscribe(
        {
          next: (res) => {
            this.allIban = res
            resolve()
          },
          error: (ee) => {
            console.log(ee)
            reject()
          }
        }
      )

    })
  }


  // ---------------------------News-----------------------

  async GetAllNews(){
    return new Promise<void>((resolve, reject) => {
      this.http.get(" https://localhost:44388/api/Hr/GetAnn").subscribe({
        next: res => {
          this.AllNews = res
          resolve()
        },
        error: err =>{
          console.log(err);
          reject()          
        }
      })
    })
  }

  async UpdateNews(news : any){
    return new Promise<void>((resolve, reject) => {
      this.http.put(" https://localhost:44388/api/Hr/UpdateAnn",news).subscribe({
        next: res => {
          resolve()
        },
        error: err =>{
          console.log(err);
          reject()          
        }
      })
    })
  }

  async DeleteNews(userid: any) {

    console.log(userid);
    return new Promise<void>((resolve, reject) => {
      this.http.delete(" https://localhost:44388/api/Hr/DeleteAnn?id=" + userid).subscribe(
        {
          
          
          next: () => {
            this.toastr.success("News deleted successfully")
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


    })
  }


  async CreateNews(news: any) {
    return new Promise<void>((resolve, reject) => {

      this.http.post(" https://localhost:44388/api/Hr/CreateAnn", news).subscribe(
        {
          next: () => {
            resolve();
            this.toastr.success('Annoicment Added successfully!');
          }
          ,
          error: (ee) => {
            console.log(ee)
            this.toastr.error('Somthing went wrong!');

            reject();
          }

        }
      )


    })
  }


}



