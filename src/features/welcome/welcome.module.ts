import {NgModule} from "@angular/core";

import {SharedModule} from "../../shared/shared.module";
import {WelcomeRoutingModule} from "./welcome-routing.module";
import {WelcomeComponent} from "./welcome.component";

@NgModule({
    imports: [
        SharedModule,
        WelcomeRoutingModule,
    ],
    declarations: [
        WelcomeComponent,
    ],
    exports: [],
    providers: [],
})
export class WelcomeModule {
}
