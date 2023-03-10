import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import  Products  from '../../models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  // allProducts:IProduct[]=Products();
  allProducts: IProduct[] = [];
  constructor(private productService: ProductService) { } // initalization
  ngOnInit(): void {
    this.allProducts = this.productService.getAllProduct();
  }
  remove(id:number){
    // this.productService.delete(id);
    console.log(id)
    this.allProducts =this.allProducts.filter((item)=> item.id!=id)
  }
  getProduct(id:number){
    
  }

}
