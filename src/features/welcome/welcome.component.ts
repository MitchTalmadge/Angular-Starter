import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";

@Component({
    selector: "welcome",
    templateUrl: "welcome.component.html",
    styleUrls: ["welcome.component.css"],
})
export class WelcomeComponent implements OnInit {

    /**
     * The sign-in form.
     */
    public form: FormGroup;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router) {
        this.buildForm();
    }

    public ngOnInit(): void {
    }

    /**
     * Called when the sign-in form is submitted.
     */
    public onSignIn() {
        this.authService.signIn(this.form.controls.email.value, this.form.controls.password.value)
            .then(() => {
                console.log("Sign In Success");
                this.router.navigate(["/secure"]);
            })
            .catch((err) => {
                console.error("Sign In Failure: " + err);
            });
    }

    /**
     * Creates the sign-in form.
     */
    private buildForm(): void {
        this.form = this.formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required],
        });
    }

}
