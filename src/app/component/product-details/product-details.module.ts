import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertService } from "../alert/alert.service";

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, ProductDetailsRoutingModule],
  exports: [ProductDetailsComponent],
  providers: []
})
export class ProductDetailsModule {}
