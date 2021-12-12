import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponentComponent } from './component/driver-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DriverComponentComponent],
  exports: [DriverComponentComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class DriverModuleModule {}

