import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{
  newProduct: IProduct | null = null;
  constructor(private productService: ProductService, private router: Router) { 
  } 
  name: string='';
  imageURL: string = '';
  price: number  = 0;
  quantity: number = 1;
  description: string= '';


add(){
  console.log(this.imageURL)
  this.productService.addProduct(
    {
      id: Math.ceil(Math.random() * 100),
      name:this.name,
      imageURL:this.imageURL,
      price:this.price,
      quantity:this.quantity,
      description:this.description
  })
  this.router.navigate(["/products"]);

}

}
