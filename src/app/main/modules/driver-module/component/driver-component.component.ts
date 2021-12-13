import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-driver-component',
  templateUrl: './driver-component.component.html',
  styleUrls: ['./driver-component.component.scss']
})
export class DriverComponent implements OnInit {
  public parentForm = this.formBuilder.group({
    lastName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    middleName: ['', []],
    birthday: ['', [Validators.required]],
    foreigner: [false, []],
    driverLicence: ['', [Validators.required]],
    startExpDate: ['', [Validators.required]],
    oldDriverLicence: [false, []],
    isInsured: [false, []],
  }, {validators: this.startExpDateValidator('startExpDate', 'birthday')});

  constructor(private formBuilder: FormBuilder, private formService: FormService) {
  }

  private getInitForm(): void {
    if (this.formService.initialForm.valid) {
      this.parentForm = this.formService.getInitialForm();
    }
  }

  private startExpDateValidator(from: string, to: string): (group: FormGroup) => { [p: string]: boolean } | null{
    return (group: FormGroup): {[key: string]: boolean} => {
      const date1 = new Date(group.controls[from].value).getTime();
      const date2 = new Date(group.controls[to].value).getTime();
      const fullYearsOfExp =  (date1 - date2) / (24 * 3600 * 1000 * 365);

      if (fullYearsOfExp < 16) {
        return {
          dates: true
        };
      }
      return {};
    };
  }

  ngOnInit(): void {
    this.getInitForm();
  }
}
