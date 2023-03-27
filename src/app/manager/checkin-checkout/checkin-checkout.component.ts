import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/auth.service';
import { EmployeeService } from 'src/app/employee.service';
import { HrService } from 'src/app/hr.service';
import { ManagerService } from 'src/app/manager.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-checkin-checkout',
  templateUrl: './checkin-checkout.component.html',
  styleUrls: ['./checkin-checkout.component.css']
})
export class CheckinCheckoutComponent implements AfterViewInit {

  constructor(private spinner: NgxSpinnerService,public man : ManagerService, public hr : HrService,public employeeService:EmployeeService,private auth : AuthService ){}
  
  

  emp : any = {}
  

  async ngOnInit(){
   

    let userData:any = JSON.parse( localStorage.getItem('userInfo')+'')   
    userData.userid=parseInt (userData.userid)   
    userData.roleid=parseInt (userData.roleid)        
    delete userData.exp   
    this.emp = userData       
    await this.man.GetManagerPrifile(userData)
    await this.man.GetAttendance(userData)
    
    
  }
  async checkin(){
    await this.employeeService.Checkin(this.emp)
    this.man.GetManagerPrifile(this.emp)
    this.man.GetAttendance(this.emp)
  }
  async checkOut(){
    await this.employeeService.checkout(this.emp)
    this.man.GetManagerPrifile(this.emp)
    this.man.GetAttendance(this.emp)
  }





  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement> (this.man.attendance);


  @ViewChild(MatPaginator) paginator: MatPaginator | any | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  checkin: Date;
  checkout: Date;
  workinghour: number;
  
}