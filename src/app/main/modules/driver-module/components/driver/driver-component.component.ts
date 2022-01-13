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
    },
    { validators: startExpDateValidator('startExpDate', 'birthday') }
  );

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
  }
}
