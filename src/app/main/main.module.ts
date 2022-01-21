import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectSexDirective } from './directives/select-sex.directive';

@NgModule({
  declarations: [
    SelectSexDirective,
  ],
  imports: [CommonModule,
    ReactiveFormsModule,
    RouterModule],
  exports: [
    SelectSexDirective,
  ],
})
export class MainModule {}
