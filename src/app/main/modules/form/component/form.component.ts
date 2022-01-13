import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../../../services/form.service';
import { DriverComponent } from 'src/app/main/modules/driver-module/components/driver/driver-component.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent
  implements
    OnInit,
    AfterViewInit
{
  @ViewChildren('driverComponent') driverComponents: QueryList<DriverComponent>;
  drivers = [];
  driversCount = [0];

  constructor(
    private formService: FormService,
    private cdRef: ChangeDetectorRef,
    private route: Router
  ) {}

  private checkValidateOfForms(): boolean {
    let isValid = true;
    const components = this.driverComponents.toArray();
    for (const component of components) {
      if (!component.form.valid) {
        this.markAsTouchedAllControls(component.form);
        isValid = false;
      }
    }
    return isValid;
  }

  private initialDriverChange(): void {
    this.drivers = this.formService.getDrivers();
    this.changeDriversCount(this.drivers.length);
  }

  private getDrivers(): void {
    this.driverComponents.toArray().forEach((component, index) => {
      component.form.setValue(this.drivers[index]);
      this.cdRef.detectChanges();
    });
  }

  public changeDriversCount(numberOfDrivers: number): void {
    const tempArray = [];
    for (let i = 0; i < numberOfDrivers; i++) {
      tempArray.push(i);
    }
    this.driversCount = tempArray;
  }

  public markAsTouchedAllControls(form: FormGroup): void {
    const controls = form.controls;
    for (const controlsKey of Object.keys(controls)) {
      form.get(controlsKey).markAsTouched();
    }
  }

  public addDrivers(): void {
    const components = this.driverComponents.toArray();
    const formsData = [];
    for (const component of components) {
      formsData.push(component.form.value);
    }
    this.formService.addDriver(formsData);
    this.route.navigateByUrl('/result');
  }

  public submit(): void {
    if (!this.checkValidateOfForms()) {
      return;
    }
    this.addDrivers();
  }

  public ngOnInit(): void {
    this.initialDriverChange();
  }

  public ngAfterViewInit(): void {
    this.getDrivers();
    this.cdRef.detectChanges();
  }

}
