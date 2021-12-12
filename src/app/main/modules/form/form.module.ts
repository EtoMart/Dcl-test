import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './component/form.component';
import { DriverModuleModule } from '../driver-module/driver-module.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule, DriverModuleModule],
})
export class FormModule {}
