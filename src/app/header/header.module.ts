import {NgModule} from "@angular/core";

import {SharedModule} from "../../shared/shared.module";
import {HeaderComponent} from "./header.component";

@NgModule({
    imports: [SharedModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})
export class HeaderModule {
}
