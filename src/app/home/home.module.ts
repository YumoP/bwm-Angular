import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendModule } from '../rental//recommend/recommend.module';
import { HomeComponent } from './home.component';
import { RentalModule } from '../rental/rental.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations:[
    HomeComponent
  ],
  imports:[
    RecommendModule,
    CommonModule,
    RentalModule,
    RouterModule
  ],
  providers:[
  ]
})

export class HomeModule{}