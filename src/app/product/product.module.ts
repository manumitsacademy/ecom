import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { ProductComponent } from './product/product.component';
import {routes} from './product.routes';
import {ProductService} from './product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CounterComponent } from './counter/counter.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  declarations: [ProductComponent, ProductDetailsComponent, CartComponent, CounterComponent],
  providers:[ProductService]
})
export class ProductModule { }
