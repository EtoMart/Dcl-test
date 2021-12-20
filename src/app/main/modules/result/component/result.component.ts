import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { DriverDataInterface } from '../../../interfaces/form-data';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  driversData: DriverDataInterface[];

  constructor(private formService: FormService) {}

  public getDriverData(): void {
    this.driversData = this.formService.getDrivers();
  }

  ngOnInit(): void {
    this.getDriverData();
  }
}
