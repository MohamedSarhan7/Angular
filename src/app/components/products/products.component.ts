import { Component } from '@angular/core';
import Products from '../../models/products';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  ProductsList:IProduct[]=Products;
  
}
