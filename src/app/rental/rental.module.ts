import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RecommendModule } from './recommend/recommend.module';
import { RentalService } from './shared/rental.service';
import { Routes, RouterModule } from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { UpperCasePipe } from '../common/pipes/uppercase.pipe';

const routes: Routes = [
  { 
    path:'rentals', component: RentalComponent,
    children: [
      { path: '', component: RentalListComponent},
      { path: ':rentalId', component: RentalDetailComponent}
    ]
  }
]
@NgModule({
  declarations:[
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UpperCasePipe
  ],
  imports:[
    RecommendModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule
  ],  
  exports:[
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  providers:[
    RentalService
  ]
})

export class RentalModule{}