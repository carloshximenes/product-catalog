import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductModule } from "../product/product.module";
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from "./catalog.service";


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    CatalogRoutingModule
  ],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
