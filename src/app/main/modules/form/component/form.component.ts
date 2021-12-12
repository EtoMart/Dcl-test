import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverComponentComponent } from '../../driver-module/component/driver-component.component';
import { FormService } from '../../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild(DriverComponentComponent, { static: true })
  public driverComponent: DriverComponentComponent | undefined;

  constructor(private formService: FormService) {}

  public submit(): void {
    this.formService.changeForm(this.driverComponent?.parentForm);
  }

  ngOnInit(): void {}
}
