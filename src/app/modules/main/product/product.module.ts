import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productComponents, productRoutes } from './product.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [...productComponents],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
