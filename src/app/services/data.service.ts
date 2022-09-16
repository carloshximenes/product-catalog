import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as data from '../data/productList.json';
import { Product } from '../interface/product.interface';
import { camelizeKeys } from '../util/toCamel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _products: Product[] = [];

  constructor() {
    const dataUntyped = (data as any).default;
    this._products = camelizeKeys(dataUntyped) as Product[];
  }

  public getAll(): Observable<Product[]> {
    return of(this._products);
  }

  public getBy(id: number): Observable<Product | null> {
    let product = this._products.find((p) => p.productId === id) || null;
    return of(product);
  }
}
