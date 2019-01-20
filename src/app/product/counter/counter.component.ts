import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() index;
  constructor(private pS:ProductService) { }
  count=1;
  ngOnInit() {
  }
  incCoutner(i){
    this.count++;
    this.pS.cartProducts[i].count++;
    console.log("current cart ",this.pS.cartProducts)
  }
  decCounter(i){
    if(this.count>1){
      this.count--;
      this.pS.cartProducts[i].count--;
      console.log("current cart ",this.pS.cartProducts)
    }
  }
}
