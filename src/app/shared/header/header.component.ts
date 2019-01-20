import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pS:ProductService) { }
  cartLength;
  ngOnInit() {
    this.cartLength=this.pS.cartProducts.length;
    this.pS.cartLengthEvent$.subscribe(()=>{
      this.cartLength=this.pS.cartProducts.length;
    });
  }

}
