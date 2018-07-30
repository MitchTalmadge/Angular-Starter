import {AbstractControl, ValidatorFn} from "@angular/forms";

/**
 * Validators for ensuring that the control contains a unique value.
 */
export class UniquenessValidator {

    /**
     * Ensures that the value of the control is not already within the provided array of strings.
     * @param disallowedValues An array of strings that the value CANNOT be.
     * @param caseSensitive If the value of the control should exactly match the value inside the array, including case.
     */
    public static isUnique(disallowedValues: string[], caseSensitive: boolean = false): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value) {
                return null;
            }

            if (!disallowedValues) {
                return null;
            }

            if (caseSensitive) {
                if (disallowedValues.includes(control.value)) {
                    return {isUnique: false};
                }
            } else {
                if (disallowedValues.filter((value) => value.toLowerCase() === control.value.toString().toLowerCase()).length > 0) {
                    return {isUnique: false};
                }
            }

            return null;
        };
    }

}
