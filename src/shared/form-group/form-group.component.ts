import {Component, ElementRef, Input, ViewChild} from "@angular/core";
import {FormControl} from "@angular/forms";
import {UUIDGenerator} from "../../utils/UUIDGenerator";

@Component({
    selector: "form-group",
    templateUrl: "form-group.component.html",
})
export class FormGroupComponent {

    /**
     * The input field.
     */
    @ViewChild("inputField") public inputField: ElementRef;

    /**
     * The control
     */
    @Input() public control: FormControl;

    /**
     * Object containing the Error Messages to be shown when input is invalid.
     */
    @Input() public errorMessages: {[errorName: string]: string};

    /**
     * Label Text
     */
    @Input() public label: string;

    /**
     * Type of Input
     */
    @Input() public inputType: string;

    /**
     * Placeholder text for the input
     */
    @Input() public placeholder: string;

    /**
     * Value of the input field (will be overwritten by FormGroup Control)
     */
    @Input() public value: string;

    @Input() public autoFocus: boolean = false;

    @Input() public readOnly: boolean = false;

    /**
     * Font Awesome Icon Name
     */
    @Input() public faIconName: string;

    public uuid: string = UUIDGenerator.generateUUID();

    /**
     * Puts focus on this input field.
     */
    public focus(): void {
        $(this.inputField.nativeElement).focus();
    }

    public getErrorMessage(): string {
        if (this.errorMessages && this.control) {
            const errors = this.control.errors;
            if (errors) {
                for (const errorName in this.errorMessages) {
                    if (this.errorMessages.hasOwnProperty(errorName)) {
                        if (errorName in errors) {
                            return this.errorMessages[errorName];
                        }
                    }
                }
            }
        }

        return undefined;
    }
}
