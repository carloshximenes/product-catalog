import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private _dataService: DataService) {}

  public getProductBy(id: number): Observable<Product | null> {
    return this._dataService.getBy(id);
  }
}
