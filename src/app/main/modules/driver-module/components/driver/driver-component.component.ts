import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { DriverDataInterface } from 'src/app/main/interfaces/form-data';
import { startExpDateValidator } from 'src/app/main/modules/driver-module/components/driver/validators/start-exp-date.validator';
import { HttpDriverService } from 'src/app/main/services/http-driver.service';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.scss'],
})
export class DriverComponent implements OnInit, OnDestroy {
  public form: FormGroup = this.formBuilder.group(
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
      sex: ['male', []],
    },
    { validators: startExpDateValidator('startExpDate', 'birthday') }
  );

  constructor(
    private formBuilder: FormBuilder,
    private httpDriverService: HttpDriverService
  ) {
  }

  private subscriptions: Subscription = new Subscription();

  public driverFromHttp;

  public validateSex(sex: string): void {
    if (sex === this.form.controls.sex.value) {
      return;
    } else {
      this.changeSex();
    }
  }

  public httpDriverPost(): void {
    console.log('check');
    if (!this.form.valid) {
      return;
    } else {
      const driverData: DriverDataInterface = this.form.value;
      console.log(driverData);
      this.subscriptions.add(
        this.httpDriverService.postData(driverData).subscribe((data) => {
          this.driverFromHttp = data;
          console.log(data);
        })
      );
    }
  }

  public changeSex(): void {
    if (this.form.controls.sex.value !== 'male') {
      this.form.controls.sex.setValue('male');
    } else {
      this.form.controls.sex.setValue('female');
    }
    this.httpDriverPost();
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
