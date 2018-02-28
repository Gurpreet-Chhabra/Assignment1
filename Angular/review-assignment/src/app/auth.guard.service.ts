import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalForageService } from './localForage.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private lfs: LocalForageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
        return this.lfs.getItem({key: 'isLoggedIn'}).then(function(value) {
                if(value) {
                    return value;
                }
            },function(error) {
            }
        );
  }
}
