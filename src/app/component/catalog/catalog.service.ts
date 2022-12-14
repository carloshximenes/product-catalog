import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private _dataService: DataService) {}

  public getAllProducts(): Observable<Product[]> {
    return this._dataService.getAll();
  }
}
