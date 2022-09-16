import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { AlertService } from '../alert/alert.service';
import * as data from './../../data/productList.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public DUMMY_DATA: any = (data as any).default;
  public data: any;
  public stars: Array<string> = [];

  constructor(
    private _route: ActivatedRoute,
    private _alertService: AlertService
  ) {}

  ngOnInit(): void {
    this._route.params.pipe(take(1)).subscribe((params) => {
      this.getProductData(+params['id']);
    });
  }

  private getProductData(id: number): void {
    this.data = this.DUMMY_DATA.find((item: any) => item.ProductID === id);
    this.setTotalStars(this.data.RatingAvg);
  }

  private setTotalStars(rating: number = 0): void {
    this.stars = Array(Math.floor(rating)).fill('fa-solid fa-star');
    if (this.stars.length < rating) {
      this.stars.push('fa-solid fa-star-half');
    }
    while (this.stars.length < 5) {
      this.stars.push('fa-regular fa-star');
    }
  }

  public convertToArray(text: string, separator: string = '|'): string[] {
    return text.split(separator);
  }

  public addToCartHandler(): void {
    this._alertService.success('Product added successfully!');
  }
}
