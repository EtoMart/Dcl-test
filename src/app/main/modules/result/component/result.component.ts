import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { DriverDataInterface } from '../../../interfaces/form-data';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  driverData: DriverDataInterface;

  constructor(private formService: FormService) {}

  public getDriverData(): void {
    this.driverData = this.formService.getForm();
  }

  ngOnInit(): void {
    this.getDriverData();
    console.log('Initial form is Valid', this.formService.initialForm.valid);
    console.log('Initial form', this.formService.initialForm);

  }
}
