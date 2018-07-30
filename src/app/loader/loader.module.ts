import {NgModule} from "@angular/core";

import {SharedModule} from "../../shared/shared.module";
import { LoaderComponent } from "./loader.component";

@NgModule({
    imports: [
        SharedModule,
    ],
    declarations: [
        LoaderComponent,
    ],
    exports: [
        LoaderComponent,
    ],
    providers: [],
})
export class LoaderModule {
}
