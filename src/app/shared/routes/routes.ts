import { Routes } from '@angular/router';
import { DetailsComponent } from 'src/app/features/details/details.component';
import { HomeComponent } from 'src/app/features/home/home.component';
import { ListingComponent } from 'src/app/features/listing/listing.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'listing/:item/:filter',
    component: ListingComponent,
  },
  {
    path: 'details/:price',
    component: DetailsComponent,
  },
];
