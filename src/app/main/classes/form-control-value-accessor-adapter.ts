import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';

export abstract class FormControlValueAccessorAdapter
  implements ControlValueAccessor, Validator
{
  abstract form: FormGroup;

  onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.form.setValue(val, { emitEvent: false });
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
    return this.form.valid
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
