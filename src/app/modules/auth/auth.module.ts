import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authComponents, authRoutes } from './auth.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [...authComponents],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule { }
