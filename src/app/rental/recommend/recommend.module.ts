import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendComponent } from './recommend.component';
import { FlipCardComponent } from './flip-card/flip-card.component';

@NgModule({
  declarations:[
    RecommendComponent,
    FlipCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RecommendComponent,
    FlipCardComponent
  ]
})

export class RecommendModule{}