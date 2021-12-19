import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DriverDataInterface } from '../interfaces/form-data';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  public initialForm: FormGroup = this.fb.group({
    driver1: ['', ],
    driver2: ['', ],
  });

  constructor(private fb: FormBuilder) {}

  public drivers = [];

  public changeForm(form: FormGroup): void {
    this.initialForm = form;
    console.log('change Form', this.initialForm.value);

  }


  public getForm(): DriverDataInterface {
    return this.initialForm.value;
  }

  public getInitialForm(): FormGroup {
    console.log('drivers', this.drivers);
    return this.initialForm;
  }
}
