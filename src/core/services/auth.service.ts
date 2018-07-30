import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ApiService} from "./api/api.service";

@Injectable()
export class AuthService {

    constructor(private apiService: ApiService) {
    }

    /**
     * Attempts to login with the given credentials.
     *
     * @param email The email
     * @param password The password
     * @returns A Promise that completes when successful.
     */
    public signIn(email: string, password: string): Promise<void> {
        // Try request.
        return this.apiService.get(
            "/secure/sign-in",
            new HttpHeaders({Authorization: "Basic " + btoa(email + ":" + password)}),
        );
    }

    /**
     * Signs the user out.
     */
    public signOut(): Promise<void> {
        return this.apiService.get("/secure/sign-out");
    }

    /**
     * Determines if the user is currently signed in.
     * @returns A promise that resolves true for signed in and false for signed out.
     */
    public isSignedIn(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this.apiService.get("/secure/sign-in")
                .then(() => {
                    resolve(true);
                })
                .catch(() => {
                    resolve(false);
                });
        });

    }

}
