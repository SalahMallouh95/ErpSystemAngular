import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HrService } from './hr.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  systemUserInfo: any = { "state": null }
  userResetPasswordInfo: any


  constructor(public http: HttpClient, private spinner: NgxSpinnerService, public toastr: ToastrService, private route: Router, public hrService: HrService) { }

  async Login(login: any) {
    this.spinner.show();

    const header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }

    const Options = {
      headers: new HttpHeaders(header)
    }


    return new Promise<void>((resolve, reject) => {
      this.http.post("https://localhost:44388/api/User/Login", login, Options).subscribe(
        {
          next: (res: any) => {
            let data: any = jwt_decode(res)
            localStorage.setItem('token', res)
            localStorage.setItem('userInfo', JSON.stringify(data))
            this.spinner.hide();
            if(data.isactivated==1){
            if (data.roleid == 1) {
              this.route.navigate(["Hr/"])
            }
            else if (data.roleid == 2) {
              this.route.navigate(["Manager/"])
            }
            else {
              this.route.navigate(["Employee/"])
            }}
            else{
              this.toastr.error("This account is deactivated")
              localStorage.clear()
            }
            resolve()
          },
          error: (ee) => {
            this.toastr.error("Email or password are worng")
            reject()
          }
        }
      )
      this.spinner.hide();
    })

  }
  
  getdata() {
    let userData: any = JSON.parse(localStorage.getItem('userInfo') + '')
    userData.userid = parseInt(userData.userid)
    userData.roleid = parseInt(userData.roleid)
    delete userData.exp
    delete userData.isactivated
    return userData
  }

  async SendMail(emp: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {

      this.http.post("https://localhost:44388/api/User/SendEmail", emp).subscribe(
        {
          next: () => {

            resolve();
          },
          error: (err) => {
            console.log(err);
            this.toastr.success('Error')
            reject();
          }
        }
      )
      this.spinner.hide()
    })
  }

  async GetPassString(pass: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {

      this.http.post("https://localhost:44388/api/User/getPassParam", pass).subscribe(
        {
          next: (res) => {
            this.userResetPasswordInfo = res
            resolve();
          },
          error: (err) => {
            console.log(err);
            this.toastr.success('Error')
            reject();
          }
        }
      )
      this.spinner.hide()
    })
  }

  async DeletePassString(pass: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {

      this.http.post("https://localhost:44388/api/User/deletePassParam", pass).subscribe(
        {
          next: () => {
            resolve();
          },
          error: (err) => {
            console.log(err);
            this.toastr.success('Error')
            reject();
          }
        }
      )
      this.spinner.hide()
    })
  }


  async CreatePassString(pass: any) {
    this.spinner.show()
    return new Promise<void>((resolve, reject) => {

      this.http.post("https://localhost:44388/api/User/createPassParam", pass).subscribe(
        {
          next: (res) => {
            this.userResetPasswordInfo = res
            resolve();
          },
          error: (err) => {
            console.log(err);
            this.toastr.success('Error')
            reject();
          }
        }
      )
      this.spinner.hide()
    })
  }

}

