import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public productList: Product[] = [];

  constructor(private _service: CatalogService) {}

  ngOnInit(): void {
    this._service
      .getAllProducts()
      .pipe(take(1))
      .subscribe((list: Product[]) => {
        this.productList = list;
      });
  }
}
