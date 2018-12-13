import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RentalModule } from './rental/rental.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { headerComponent} from './common/header/header.component';
import { RentalHeaderComponent } from './common/rental-header/rental-header.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';

// import { faRegistered } from '@fortawesome/free-solid-svg-icons';


const routes: Routes = [
  { path:'', redirectTo: "/rentals", pathMatch: "full" },
  { path: 'home', component: HomeComponent}
]
@NgModule({
  declarations: [
    headerComponent,
    AppComponent,
    RentalHeaderComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    //library.add(faRegistered);
  }
}
