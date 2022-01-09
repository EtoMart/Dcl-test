import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResultComponent } from './component/result.component';
import { ResultRoutingModule } from './result-routing.module';

@NgModule({
  declarations: [ResultComponent],
  imports: [CommonModule,
            ResultRoutingModule],
})
export class ResultModule {}
