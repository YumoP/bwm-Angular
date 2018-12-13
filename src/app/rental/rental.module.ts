import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RecommendModule } from './recommend/recommend.module';
import { RentalService } from './shared/rental.service';
import { Routes, RouterModule } from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { Rental } from './shared/rental.model';


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
    RentalDetailComponent
  ],
  imports:[
    RecommendModule,
    CommonModule,
    RouterModule.forChild(routes)
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