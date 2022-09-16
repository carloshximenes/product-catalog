import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { AlertService } from '../alert/alert.service';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public data!: Product;

  constructor(
    private _route: ActivatedRoute,
    private _alertService: AlertService,
    private _service: ProductDetailsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(take(1)).subscribe((params) => {
      this._getProductData(+params['id']);
    });
  }

  private _getProductData(id: number): void {
    this._service
      .getProductBy(id)
      .pipe(take(1))
      .subscribe((product) => {
        if (product) {
          this.data = product;
        } else {
          this._itemNotFounded();
        }
      });
  }

  private _itemNotFounded(): void {
    this._router.navigate(['/item-not-founded']);
  }

  public getStars(rating: number = 0): string[] {
    let stars = Array(Math.floor(rating)).fill('fa-solid fa-star');
    if (stars.length < rating) {
      stars.push('fa-solid fa-star-half');
    }
    while (stars.length < 5) {
      stars.push('fa-regular fa-star');
    }

    return stars;
  }

  public convertToArray(text: string, separator: string = '|'): string[] {
    return text.split(separator);
  }

  public addToCartHandler(): void {
    this._alertService.success('Product added successfully!');
  }
}
