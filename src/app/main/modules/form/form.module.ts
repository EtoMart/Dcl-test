import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './component/form.component';
import { DriverModule } from '../driver-module/driver-module.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, DriverModule],
})
export class FormModule {}
