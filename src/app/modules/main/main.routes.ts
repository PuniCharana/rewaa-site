import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  }
];

export const mainComponents = [
    HomeComponent
];