import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productComponents, productRoutes } from './product.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...productComponents],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
