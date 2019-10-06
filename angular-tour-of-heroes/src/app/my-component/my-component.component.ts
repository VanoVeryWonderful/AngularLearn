import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from '../mock-products';
import {ProductOne} from '../products';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
 products = PRODUCTS;
 selectedProduct: ProductOne;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hui: ProductOne): void {
    this.selectedProduct = hui;
  }
}
