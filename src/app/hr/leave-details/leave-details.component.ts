import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrService } from 'src/app/hr.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {
  constructor(hrservice:HrService,private route:ActivatedRoute){
  }
  id:number|undefined

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }
}
