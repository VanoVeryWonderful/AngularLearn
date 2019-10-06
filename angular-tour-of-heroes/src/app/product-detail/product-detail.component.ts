import { Component, OnInit, Input } from '@angular/core';
import { ProductOne } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input() productDetail: ProductOne;
  constructor() { }

  ngOnInit() {
  }

}
