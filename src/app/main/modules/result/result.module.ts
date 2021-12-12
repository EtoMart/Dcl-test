import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './component/result.component';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule, ResultRoutingModule],
})
export class ResultModule {}
