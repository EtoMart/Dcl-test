import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormBuilder } from '@angular/forms';
import { DriverDataInterface } from '../../../interfaces/form-data';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterContentChecked {

  driversCount = 1;

  constructor(private formService: FormService, private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef
  ) {}

  public parentForm = this.formBuilder.group({
    driver1: [],
    driver2: [],
    driver3: [],
    driver4: [],
    driver5: [],
  }, );

  public changeDriversCount(numberOfDrivers: number): void{
    this.driversCount = numberOfDrivers;
    console.log(this.parentForm);

    for (let i = 5 ; i <= 1 ; i--){
      this.parentForm.get(`driver${i}`).disable();
    }

    for (let i = 5 ; i <= this.driversCount ; i--){
      if (this.driversCount === 5){
        return;
      }
      this.parentForm.get(`driver${i}`).disable();
    }
  }


  public submit(): void {
    const formValues: DriverDataInterface[] = Object.values(this.parentForm.value);
    const drivers: DriverDataInterface[] = [];
    for (const value of formValues) {
      if (value !== null){
        drivers.push(value);
      }
    }
    this.formService.addDriver(drivers);
    console.log(drivers);

    // this.router.navigate(['/result']);

  }

  private getDrivers(): void {
    const drivers = this.formService.getDrivers();
    this.driversCount = drivers.length;
    for (let i = 1; i < drivers.length + 1; i++) {
      this.parentForm.get(`driver${i}`).setValue(drivers[i - 1]);
    }
    console.log(this.parentForm);
  }

  ngOnInit(): void {
    this.getDrivers();
    this.cdRef.detectChanges();
  }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges();
  }
}
