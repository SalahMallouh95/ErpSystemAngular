import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private tostar:ToastrService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token =localStorage.getItem('token')
      let user:any = localStorage.getItem('userInfo')
      user=JSON.parse(user)
      

      if(token)
      {
        if(state.url.includes('Hr'))
        {
          if(user.roleid==1)
          {
            return true
          }
          else
          {
            this.tostar.error('Unauthorized')
            this.route.navigate([""])
            return false;
          }          
        }

        if(state.url.includes('Manager'))
        {
          if(user.roleid==2)
          {
            return true
          }
          else
          {
            this.tostar.error('Unauthorized')
            this.route.navigate([""])
            return false;
          }          
        }

        if(state.url.includes('Employee'))
        {
          if(user.roleid==3)
          {
            return true
          }
          else
          {
            this.tostar.error('Unauthorized')
            this.route.navigate([""])
            return false;
          }          
        }
        
      }else
      {
        this.tostar.error('Unauthorized')
        this.route.navigate([""])
        return false;
      }
      
    return true;
  }
  
}
