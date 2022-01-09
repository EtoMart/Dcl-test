import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverComponent } from 'src/app/main/modules/driver-module/components/driver/driver-component.component';

@NgModule({
  declarations: [DriverComponent],
  exports: [DriverComponent],
  imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule],
})
export class DriverModule {}
