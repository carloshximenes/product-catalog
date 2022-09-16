import { Component, OnInit } from '@angular/core';
import * as data from './../../data/productList.json';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  public DUMMY_DATA: any = (data as any).default;

  ngOnInit(): void {
  }

}
