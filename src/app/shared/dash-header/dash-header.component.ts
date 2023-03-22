import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.css']
})
export class DashHeaderComponent {

  constructor(private route:Router){}

  Logout(){
    localStorage.clear();
    this.route.navigate(['']);
    }

}
