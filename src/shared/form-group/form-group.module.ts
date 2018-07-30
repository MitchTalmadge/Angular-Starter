import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlertModule} from "../alert/alert.module";
import {FormGroupComponent} from "./form-group.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        AlertModule,
    ],
    exports: [FormGroupComponent],
    declarations: [FormGroupComponent],
    providers: [],
})
export class FormGroupModule { }
