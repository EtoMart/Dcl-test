import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverComponent } from '../../driver-module/component/driver-component.component';
import { FormService } from '../../../services/form.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild(DriverComponent, { static: true })
  public driverComponent: DriverComponent | undefined;

  constructor(private formService: FormService, private formBuilder: FormBuilder
  ) {}

  public parentForm = this.formBuilder.group({
    driver1: [],
    driver2: [],
  }, );

  public submit(): void {
    console.log(this.parentForm.value);
    this.formService.changeForm(this.parentForm);
    // this.router.navigate(['/result']);

  }

  private getInitForm(): void {
    // console.log('Initial form is Valid', this.formService.initialForm.valid);
    // if (this.formService.initialForm.valid) {
    //   this.parentForm = this.formService.getInitialForm();
    // }
    const dataDriver1 = {
      birthday: '1111-11-11',
      driverLicence: '1231231',
      firstName: '123123',
      foreigner: false,
      isInsured: false,
      lastName: '2222',
      middleName: '123123',
      oldDriverLicence: false,
      startExpDate: '2222-02-22',
    };

    this.parentForm.controls.driver1.setValue(dataDriver1, { onlySelf: true, emitEvent: this });
    this.parentForm.controls.driver2.patchValue(dataDriver1);
  }

  ngOnInit(): void {
    this.getInitForm();
    console.log('Initial form', this.formService.initialForm);


  }
}
