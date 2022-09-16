import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertService } from "../alert/alert.service";

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsService } from "./product-details.service";

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule],
  exports: [ProductDetailsComponent],
  providers: [ProductDetailsService]
})
export class ProductDetailsModule {}
