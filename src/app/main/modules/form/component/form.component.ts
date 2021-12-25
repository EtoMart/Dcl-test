import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit, Query, QueryList, ViewChildren,
} from '@angular/core';
import { FormService } from '../../../services/form.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import { DriverDataInterface } from '../../../interfaces/form-data';
import {DriverComponent} from '../../driver-module/component/driver-component.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterContentChecked {
  @ViewChildren('driverComponent') driverComponents: QueryList<DriverComponent>;
  drivers = [0];

  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
  ) {}

  public changeDriversCount(numberOfDrivers: number): void {
    const tempArray = [];
    for (let i = 0 ; i < numberOfDrivers; i++ ){
      tempArray.push(i);
    }
    this.drivers = tempArray;
  }

  private checkValidateOfForms(): boolean {
    const components = this.driverComponents.toArray();
    let isValid = true;
    for (const component of components) {
      if (!component.form.valid){
        this.markAsTouchedAllControls(component.form);
        isValid = false;
      }
    }
    return isValid;
  }

  public markAsTouchedAllControls(form: FormGroup): void {
    const controls = form.controls;
    for (const controlsKey of Object.keys(controls)) {
      form.get(controlsKey).markAsTouched();
    }
  }

  public submit(): void  {
    if (!this.checkValidateOfForms()){
      return;
    }
    console.log(this.driverComponents);
  }


  // public changeDriversCount(numberOfDrivers: number): void {
  //   this.driversCount = numberOfDrivers;
  //   for (let i = 1; i <= this.driversCount; i++) {
  //     this.parentForm.get(`driver${i}`).enable();
  //   }
  //   for (let i = 5; i > this.driversCount; i--) {
  //     if (this.driversCount === 5) {
  //       return;
  //     }
  //     this.parentForm.get(`driver${i}`).disable();
  //   }
  //   this.parentForm.updateValueAndValidity();
  // }

  // private getDrivers(): void {
  //   const drivers = this.formService.getDrivers();
  //   this.driversCount = drivers.length;
  //   for (let i = 1; i < drivers.length + 1; i++) {
  //     this.parentForm.get(`driver${i}`).setValue(drivers[i - 1]);
  //   }
  // }

  public addDrivers(): void {
  }


  ngOnInit(): void {
    console.log(this.driverComponents);
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }
}
