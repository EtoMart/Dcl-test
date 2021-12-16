import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverDataInterface } from '../interfaces/form-data';
import { DriverComponent } from '../modules/driver-module/component/driver-component.component';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  public initialForm: FormGroup = this.fb.group({
    lastName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    middleName: ['', []],
    birthday: ['', [Validators.required]],
    foreigner: [false, []],
    driverLicence: ['', [Validators.required]],
    startExpDate: ['', [Validators.required]],
    oldDriverLicence: [false, []],
    isInsured: [false, []]
  });

  constructor(private fb: FormBuilder) {}

  public count = [];

  public changeForm(form: FormGroup): void {
    this.initialForm = form;
    console.log('change Form', this.initialForm.value);

  }


  public getForm(): DriverDataInterface {
    return this.initialForm.value;
  }

  public getInitialForm(): FormGroup {
    console.log('count', this.count);
    return this.initialForm;
  }
}
