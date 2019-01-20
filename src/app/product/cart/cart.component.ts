import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private pS:ProductService) { }
  cartProducts;
  ngOnInit() {
    this.cartProducts=this.pS.cartProducts;
  }

}
