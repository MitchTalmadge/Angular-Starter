import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import { ApiService } from "./services/api/api.service";
import { AuthService } from "./services/auth.service";
import {LoaderService} from "./services/loader.service";

/**
 * This module contains the service and other things which should only load once in the application.
 */
@NgModule({
    imports: [
        HttpClientModule,
        HttpClientXsrfModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        ApiService,
        AuthService,
        LoaderService,
    ],
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() otherCoreModule: CoreModule) {
        if (otherCoreModule) {
            throw new Error("The Core Module was imported twice. It can only be imported once (in the root module)");
        }
    }

}
