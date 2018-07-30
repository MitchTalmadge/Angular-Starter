import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AlertModule} from "./alert/alert.module";
import {FormGroupModule} from "./form-group/form-group.module";
import { InlineLoaderModule } from "./inline-loader/inline-loader.module";
import {ModalModule} from "./modal/modal.module";

/**
 * This module is dedicated to highly re-usable components that are used often in feature components (pages, etc)
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Components
        AlertModule,
        FormGroupModule,
        InlineLoaderModule,
        ModalModule,
    ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Components
        AlertModule,
        FormGroupModule,
        InlineLoaderModule,
        ModalModule,
    ],
    providers: [],
})
export class SharedModule {
}
