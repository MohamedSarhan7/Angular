import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId: number = 0;
  product: IProduct | null = null;

  name: string = '';
  imageURL: string = '';
  price: number = 0;
  quantity: number = 1;
  description: string = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    if (this.productId) {
      this.product = this.productService.getProductById(this.productId);
      this.name = this.product?.name;
      this.price=this.product?.price;
      this.description=this.product?.description;
      this.imageURL=this.product?.imageURL;
      this.quantity = this.product?.quantity;
      
    } else {
      this.router.navigate(['/products']);
    }
  }



  edit() {
    // this.productService.editProduct(this.productId);
    // console.log(this.imageURL)
    this.productService.editProduct(this.productId,
      {
        id: Math.random() * 100,
        name: this.name,
        imageURL: this.imageURL,
        price: this.price,
        quantity: this.quantity,
        description: this.description
      })
    this.router.navigate(["/products"]);

  }
}
