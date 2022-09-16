import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  data!: Product;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public viewDetailsHandler(): void {
    this._router.navigate(['/product', this.data.productId]);
  }
}
