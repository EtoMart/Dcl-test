import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DriverDataInterface } from '../interfaces/form-data';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public initialForm: FormGroup = this.fb.group({
    lastName: ['', []],
    firstName: ['', []],
    middleName: ['', []],
    birthday: ['', []],
    foreigner: ['', []],
    driverLicence: ['', []],
    startExpDate: ['', []],
    oldDriverLicence: ['', []],
    isInsured: ['', []],
  });

  constructor(private fb: FormBuilder) {}

  public changeForm(form: FormGroup): void {
    this.initialForm = form;
    console.log(this.initialForm.value);
  }

  public getForm(): DriverDataInterface {
    return this.initialForm.value;
  }
}
