import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormService } from '../../../services/form.service';
import { DriverComponent } from '../../driver-module/component/driver-component.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent
  implements OnInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    OnDestroy {
  @ViewChildren('driverComponent') driverComponents: QueryList<DriverComponent>;
  drivers = [];
  driversCount = [0];
  subscriptions: Subscription = new Subscription();

  constructor(
    private formService: FormService,
    private cdRef: ChangeDetectorRef,
    private route: Router,
  ) {
  }

  public changeDriversCount(numberOfDrivers: number): void {
    const tempArray = [];
    for (let i = 0; i < numberOfDrivers; i++) {
      tempArray.push(i);
    }
    this.driversCount = tempArray;
  }

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

  public markAsTouchedAllControls(form: FormGroup): void {
    const controls = form.controls;
    for (const controlsKey of Object.keys(controls)) {
      form.get(controlsKey).markAsTouched();
    }
  }

  private initialDriverChange(): void {
    this.drivers = this.formService.getDrivers();
    this.changeDriversCount(this.drivers.length);
  }

  private getDrivers(): void {
    const components = this.driverComponents.toArray();
    for (let i = 0; i < components.length; i++) {
      components[i].form.setValue(this.drivers[i]);
      this.cdRef.detectChanges();
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

  ngOnInit(): void {
    this.initialDriverChange();
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDrivers();
    this.cdRef.detectChanges();
  }

  ngAfterContentChecked(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
