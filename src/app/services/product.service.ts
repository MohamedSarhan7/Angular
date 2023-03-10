import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import Products from '../models/products';
// import { IProduct } from 'src/app/models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getAllProduct(): IProduct[] {
    return Products;
  }

  addProduct(product:IProduct){
    Products.push(product);
  }

  editProduct(id:number,product: IProduct) {
    let productIndex=Products.findIndex(item=>item.id===id);
    Products[productIndex].name = product.name;
    Products[productIndex].price=product.price;
    Products[productIndex].quantity=product.quantity;
    Products[productIndex].imageURL=product.imageURL;
    Products[productIndex].description = product.description;
    console.log(Products[productIndex]);
  }

  getProductById(productId: number): IProduct {
    return Products.filter((product) => product.id == productId)[0];
  }
  delete(id:number){
    // Products = Products.filter((item) => item.id != id)
  }
}
