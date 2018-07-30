import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.css"],
})

export class HeaderComponent implements OnInit {

    /**
     * Determines if we are on a secure page or not.
     * This is to hide navigation that should not appear on insecure pages.
     */
    public onSecurePage: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthService) {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.onSecurePage = event.urlAfterRedirects.includes("/secure");
                }
            },
        );
    }

    public ngOnInit() {
    }

    public onSignOut(): void {
        this.authService.signOut()
            .then(() => {
                this.router.navigate(["/"]);
            })
            .catch((err) => {
                console.error("Failed to sign out: " + err.message);
            });
    }

}
