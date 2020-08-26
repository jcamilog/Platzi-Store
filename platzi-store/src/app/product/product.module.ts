import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent} from './components/products/products.component';

import { ProductRouting } from './product-routing.module';
import { MaterialModule } from './../material/material.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    ProductRouting,
    CommonModule,
    MaterialModule
  ]
})
export class ProductModule { }
