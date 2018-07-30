import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {ModalBodyComponent} from "./modal-body/modal-body.component";
import {ModalFooterComponent} from "./modal-footer/modal-footer.component";
import {ModalComponent} from "./modal.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
    ],
    exports: [
        ModalComponent,
        ModalBodyComponent,
        ModalFooterComponent,
    ],
    providers: [],
})
export class ModalModule {
}
