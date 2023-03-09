import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';

const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductsTableComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "products/da/add", component: AddProductComponent },
  { path: "products/:id/edit", component: EditProductComponent },
  { path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
