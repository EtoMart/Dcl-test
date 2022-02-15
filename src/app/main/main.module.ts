import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectSexDirective } from './directives/select-sex.directive';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    SelectSexDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule],
  exports: [
    SelectSexDirective,
  ],
})
export class MainModule {}
