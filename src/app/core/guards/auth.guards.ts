import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        let url: string = state.url;

        return this.checkIsLogin();
    }

    checkIsLogin(): boolean {

        if (this.authService.getToken()) {
            
            return true;
        }

        // Navigate to the login page with extras
        this.router.navigateByUrl('/auth');
        return false;
    }
}