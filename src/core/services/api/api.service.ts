import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class ApiService {

    private static readonly apiUrl: string = "/api/";
    private static headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    });

    private static removeTrailingSlash(path: string): string {
        if (path && path.startsWith("/")) {
            path = path.substring(1);
        }
        return path;
    }

    /**
     * When an HTTP method results in an error, whether client-sided or server-sided, this method is called.
     * @param error The error that was caught.
     * @param caught The observable related to the error.
     * @returns The un-altered caught parameter.
     */
    private static handleError(error: HttpErrorResponse, caught: Observable<any>): Observable<any> {
        if (error.error instanceof ErrorEvent) {
            console.error("A client-side connection error occurred while accessing " + error.url + ": ", error.error.message);
        }

        return throwError(error.error);
    }

    private static getApiUrlFromEndpoint(endpoint: string): string {
        return ApiService.apiUrl + ApiService.removeTrailingSlash(endpoint);
    }

    /**
     * Gets the usable contents of a response.
     * This is useful when an API has a standard format that includes fields such as "ok", "error", "content"...
     * @param response The response.
     * @returns The content.
     */
    private static getResponseContents(response: any): any {
        return response.content;
    }

    constructor(private http: HttpClient) {
    }

    public get(path: string, additionalHeaders?: HttpHeaders): Promise<any> {
        let options;
        if (additionalHeaders) {
            // Copy the current headers.
            let newHeaders: HttpHeaders = new HttpHeaders();
            ApiService.headers.keys().forEach((value) => newHeaders = newHeaders.set(value, ApiService.headers.getAll(value)));

            // Append the additional headers.
            additionalHeaders.keys().forEach((value) => newHeaders = newHeaders.append(value, additionalHeaders.getAll(value)));

            options = {headers: newHeaders};
        } else {
            options = {headers: ApiService.headers};
        }

        return this.http.get<any>(ApiService.getApiUrlFromEndpoint(path), options)
            .pipe(
                catchError(ApiService.handleError),
                map(ApiService.getResponseContents))
            .toPromise();
    }

    public post(path: string, data: any): Promise<any> {
        const options = {headers: ApiService.headers};
        return this.http.post(ApiService.getApiUrlFromEndpoint(path), JSON.stringify(data), options)
            .pipe(
                catchError(ApiService.handleError),
                map(ApiService.getResponseContents))
            .toPromise();
    }

    public put(path: string, data: any): Promise<any> {
        const options = {headers: ApiService.headers};
        return this.http.put(ApiService.getApiUrlFromEndpoint(path), JSON.stringify(data), options)
            .pipe(
                catchError(ApiService.handleError),
                map(ApiService.getResponseContents))
            .toPromise();
    }

    public patch(path: string, data?: any): Promise<any> {
        const options = {headers: ApiService.headers};
        return this.http.patch(ApiService.getApiUrlFromEndpoint(path), data != null ? JSON.stringify(data) : undefined, options)
            .pipe(
                catchError(ApiService.handleError),
                map(ApiService.getResponseContents))
            .toPromise();
    }

    public delete(path: string): Promise<any> {
        const options = {headers: ApiService.headers};
        return this.http.delete(ApiService.getApiUrlFromEndpoint(path), options)
            .pipe(
                catchError(ApiService.handleError),
                map(ApiService.getResponseContents))
            .toPromise();
    }

}
