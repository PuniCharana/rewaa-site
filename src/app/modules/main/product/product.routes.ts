import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListingComponent } from './listing/listing.component';

export const productRoutes: Routes = [
  {
    path: '',
    component: ListingComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  }
];

export const productComponents = [
  ListingComponent
];