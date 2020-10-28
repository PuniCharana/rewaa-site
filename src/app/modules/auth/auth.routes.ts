import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const authComponents = [
  LoginComponent
];