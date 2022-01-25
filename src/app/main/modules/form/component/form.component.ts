import {
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
import { DriverComponent } from 'src/app/main/modules/driver-module/components/driver/driver-component.component';
import { HttpDriverService } from 'src/app/main/services/http-driver.service';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  @ViewChildren('driverComponent')
  public driverComponents: QueryList<DriverComponent>;
  public drivers = [];
  public driversComponents = [0];
  public driverIdFlag = false;

  constructor(
    private formService: FormService,
    private cdRef: ChangeDetectorRef,
    private route: Router,
    private httpDriverService: HttpDriverService
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
      component.httpDriverPost();
      this.cdRef.detectChanges();
    });
  }

  public checkDriverId(): void {
    this.subscriptions.add(
      this.httpDriverService.driverIdFlag$.subscribe((data) => {
        if (data) {
          this.driverIdFlag = true;
        }
      })
    );
  }

  public resetForms(): void {
    this.driverComponents.toArray().forEach((component) => {
      component.form.reset();
    });
  }

  public getDriversFromComponentsByID(): void {
    this.driverComponents.toArray().forEach((component) => {
      if (!component.driverFromHttp) {
        return;
      }
      component.getHttpDriver();
    });
  }

  public changeDriversCount(numberOfDrivers: number): void {
    const tempArray = [];
    for (let i = 0; i < numberOfDrivers; i++) {
      tempArray.push(i);
    }
    this.driversComponents = tempArray;
  }

  public markAsTouchedAllControls(form: FormGroup): void {
    const controls = form.controls;
    for (const controlsKey of Object.keys(controls)) {
      form.get(controlsKey).markAsTouched();
    }
  }

  public async saveDrivers(): Promise<void> {
    const components = this.driverComponents.toArray();
    const formsData = [];
    for (const component of components) {
      formsData.push(component.form.value);
    }
    this.formService.addDriver(formsData);
    await this.route.navigateByUrl('/result');
  }

  public submit(): void {
    if (!this.checkValidateOfForms()) {
      return;
    }
    this.saveDrivers();
  }

  public ngOnInit(): void {
    this.initialDriverChange();
    this.checkDriverId();
  }

  public ngAfterViewInit(): void {
    this.getDrivers();
    this.cdRef.detectChanges();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
