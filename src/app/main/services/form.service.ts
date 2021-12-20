import { Injectable } from '@angular/core';
import { DriverDataInterface } from '../interfaces/form-data';


@Injectable({
  providedIn: 'root',
})
export class FormService {


  constructor() {}

  public drivers: DriverDataInterface[] = [];
  public addDriver(drivers: DriverDataInterface[]): void {
    this.drivers = drivers;
  }

  public getDrivers(): DriverDataInterface[] {
    return this.drivers;
  }


}
