import {Component, OnInit} from "@angular/core";

@Component({
    selector: "modal-body",
    template: `<ng-content></ng-content>`,
})
export class ModalBodyComponent implements OnInit {

    constructor() {
    }

    public ngOnInit() {
    }

}
