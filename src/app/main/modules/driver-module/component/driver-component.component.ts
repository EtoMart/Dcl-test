import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { FormControlValueAccessorAdapter } from '../../../classes/form-control-value-accessor-adapter';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DriverComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: DriverComponent,
      multi: true,
    },
  ],
})
export class DriverComponent
  extends FormControlValueAccessorAdapter
  implements OnInit, OnDestroy
{
  form: FormGroup = this.formBuilder.group(
    {
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', []],
      birthday: ['', [Validators.required]],
      foreigner: [false, []],
      driverLicence: ['', [Validators.required]],
      startExpDate: ['', [Validators.required]],
      oldDriverLicence: [false, []],
      isInsured: [false, []],
    },
    { validators: this.startExpDateValidator('startExpDate', 'birthday') }
  );

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  private startExpDateValidator(
    from: string,
    to: string
  ): (group: FormGroup) => { [p: string]: boolean } | null {
    return (group: FormGroup): { [key: string]: boolean } => {
      const date1 = new Date(group.controls[from].value).getTime();
      const date2 = new Date(group.controls[to].value).getTime();
      const fullYearsOfExp = (date1 - date2) / (24 * 3600 * 1000 * 365);

      if (fullYearsOfExp < 16) {
        return {
          dates: true,
        };
      }
      return {};
    };
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.updateValueAndValidity();
    }, 100);
  }

  ngOnDestroy(): void {}
}
