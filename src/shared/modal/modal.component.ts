import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
require("bootstrap");

@Component({
    selector: "modal",
    templateUrl: "modal.component.html",
    styleUrls: ["modal.component.css"],
})
export class ModalComponent implements OnInit {
    @ViewChild("modalRoot")
    public modalRoot: ElementRef;

    /**
     * The title to display at the top of the modal.
     */
    @Input() public title: string;

    /**
     * The size of the modal.
     * Valid options are: "sm", "md", "lg".
     * Default is "md".
     */
    @Input() public size: string = "md";

    /**
     * Whether or not the modal should close when the user presses the ESC key.
     * Defaults to true.
     */
    @Input() public closeOnEscape: boolean = true;

    /**
     * Whether or not the modal should close when the user clicks outside the modal.
     * Defaults to true.
     */
    @Input() public closeOnOutsideClick: boolean = true;

    /**
     * Whether or not to hide the "X" close button in the top right corner of the modal.
     * Defaults to false;
     */
    @Input() public hideCloseButton: boolean = false;

    /**
     * Providing a label for the cancel button will make it display in the footer.
     * By default there is no cancel button.
     */
    @Input() public cancelButtonLabel: string;

    /**
     * Providing a label for the submit button will make it display in the footer.
     * By default there is no submit button.
     */
    @Input() public submitButtonLabel: string;

    /**
     * Determines whether the submit button is greyed out (disabled), assuming that the submit button exists.
     * Defaults to false.
     */
    @Input() public submitButtonDisabled: boolean = false;

    /**
     * Providing a label for the danger button will make it display in the footer.
     * By default there is no danger button.
     */
    @Input() public dangerSubmitButtonLabel: string;

    /**
     * Emits when the user clicks the submit button, if it exists.
     */
    @Output() public onSubmit: EventEmitter<any> = new EventEmitter();

    /**
     * Emits when the user clicks the cancel button, if it exists.
     * Also emitted when the user closes the modal by other means (ESC, X button, click outside modal).
     */
    @Output() public onCancel: EventEmitter<any> = new EventEmitter();

    /**
     * Emits when the user clicks the danger button, if it exists.
     */
    @Output() public onDangerSubmit: EventEmitter<any> = new EventEmitter();

    /**
     * Determines if the modal should be displayed or not.
     */
    public isOpen: boolean = false;

    /**
     * The shadowy backdrop behind the modal.
     */
    private backdropElement: HTMLDivElement;

    constructor() {
    }

    public ngOnInit(): void {
    }

    /**
     * Displays the modal.
     */
    public openModal() {
        jQuery(this.modalRoot.nativeElement).modal({
            backdrop: this.closeOnOutsideClick ? true : "static",
            keyboard: this.closeOnEscape,
        });
    }

    /**
     * Closes the modal without emitting the onCancel emitter.
     */
    public closeModal() {
        jQuery(this.modalRoot.nativeElement).modal("hide");
    }

    /**
     * Closes the modal and emits the onCancel emitter.
     */
    public cancel() {
        this.closeModal();
        this.onCancel.next();
    }

    /**
     * Determines if the modal is oepn or not.
     * @returns True if the modal is open, false otherwise.
     */
    public isModalOpen(): boolean {
        return this.isOpen;
    }

}
