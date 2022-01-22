import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { startExpDateValidator } from 'src/app/main/modules/driver-module/components/driver/validators/start-exp-date.validator';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.scss'],
})
export class DriverComponent implements OnInit {
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

  constructor(private formBuilder: FormBuilder) {
  }

  public validateSex(sex: string): void {
    if (sex === this.form.controls.sex.value){
      return;
    } else {
      this.changeSex();
    }
  }

  public changeSex(): void{
    if (this.form.controls.sex.value !== 'male') {
      this.form.controls.sex.setValue('male');
    }else {
      this.form.controls.sex.setValue('female');
    }
  }

  public ngOnInit(): void {
  }
}
