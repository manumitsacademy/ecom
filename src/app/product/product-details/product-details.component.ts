import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
              private ar:ActivatedRoute,
              private http:HttpClient,
              private pS:ProductService
            ) { }
  url="https://api.mlab.com/api/1/databases/shoppingdb/collections/products/";
 
  apikey="?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  product;
  currentProductId;
  ngOnInit() {
    this.ar.params.subscribe((res)=>{
      console.log(this.url+res.id+this.apikey);
      this.currentProductId=res.id;
      this.http.get(this.url+res.id+this.apikey)
      .subscribe((res)=>{
        this.product=res;
      })
    })
  }
  addtoCart(){
    this.product['count']=1;
    this.pS.addProductToCart(this.product);
  }

}
