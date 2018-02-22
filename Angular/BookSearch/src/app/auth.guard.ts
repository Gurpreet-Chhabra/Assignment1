import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalforageService } from './localforage.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private lfs: LocalforageService) {}
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
