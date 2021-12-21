import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './component/driver-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DriverComponent],
  exports: [DriverComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DriverModule {}

