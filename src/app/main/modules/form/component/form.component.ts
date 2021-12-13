import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverComponent } from '../../driver-module/component/driver-component.component';
import { FormService } from '../../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild(DriverComponent, { static: true })
  public driverComponent: DriverComponent | undefined;

  constructor(private formService: FormService,
              private router: Router
  ) {}

  public submit(): void {
    this.formService.changeForm(this.driverComponent?.parentForm);
    this.router.navigate(['/result']);
    console.log(this.driverComponent?.parentForm);

  }

  ngOnInit(): void {}
}
