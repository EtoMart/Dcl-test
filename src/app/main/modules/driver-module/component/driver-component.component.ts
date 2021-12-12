import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.scss'],
})
export class DriverComponentComponent {
  public parentForm = this.formBuilder.group({
    lastName: ['', [Validators.required]],
    firstName: ['', []],
    middleName: ['', []],
    birthday: ['', []],
    foreigner: [false, []],
    driverLicence: ['', []],
    startExpDate: ['', []],
    oldDriverLicence: [false, []],
    isInsured: [false, []],
  });

  constructor(private formBuilder: FormBuilder) {}
}
