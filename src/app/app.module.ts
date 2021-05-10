import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ListingComponent } from './features/listing/listing.component';
import { DetailsComponent } from './features/details/details.component';
import { MainNavBarComponent } from './shared/components/main-navbar/main-navbar.component';
import { routes } from './shared/routes/routes';
import { RouterModule } from '@angular/router';
import { VisitedHousesCardContainerComponent } from './shared/components/visited-houses-card-container/visited-houses-card-container.component';
import { SearchForAHouseService } from './shared/services/searchForAHouse.service';
import { HttpClientModule } from '@angular/common/http';
import { HouseDetailComponent } from './shared/components/house-detail/house-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    DetailsComponent,
    MainNavBarComponent,
    VisitedHousesCardContainerComponent,
    HouseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [SearchForAHouseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
