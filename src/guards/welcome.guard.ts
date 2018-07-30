import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../core/services/auth.service";

@Injectable()
export class WelcomeGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return new Observable((observer) => {
            this.authService.isSignedIn()
                .then((signedIn) => {
                    observer.next(!signedIn);
                    if (signedIn) {
                        this.router.navigate(["/secure"]);
                    }
                })
                .catch((err) => {
                    observer.error(err);
                });
        });
    }
}
