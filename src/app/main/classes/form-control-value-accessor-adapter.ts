import { AbstractControl, ControlValueAccessor, FormGroup, ValidationErrors, Validator } from '@angular/forms';


export abstract class FormControlValueAccessorAdapter
  implements ControlValueAccessor, Validator {

  abstract form: FormGroup;

  onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      console.log(123);
      this.form.setValue(val, { emitEvent: false });
      console.log(123);
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.pipe().subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log(this.form.valid);
    console.log(this.form.status);
    return this.form.status === 'VALID'
      ? null
      : {
        invalidForm: {
          form: this.form,
          value: this.form.value,
          message: `Nested form is invalid`,
        },
      };
  }
}
