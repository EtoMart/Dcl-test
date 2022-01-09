import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverModule } from '../driver-module/driver-module.module';
import { FormComponent } from './component/form.component';

import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule,
            FormRoutingModule,
            DriverModule,
            ReactiveFormsModule],
})
export class FormModule {}





