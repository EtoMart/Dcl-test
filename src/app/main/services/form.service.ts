import { Injectable } from '@angular/core';
import { DriverDataInterface } from '../interfaces/form-data';


@Injectable({
  providedIn: 'root',
})
export class FormService {


  constructor() {}

  public drivers: DriverDataInterface[] = [];
  public addDriver(drivers: DriverDataInterface[]): void {
    for (const driver of drivers) {
      this.drivers.push(driver);
    }

  }

  public getDrivers(): DriverDataInterface[] {
    return this.drivers;
  }


}
