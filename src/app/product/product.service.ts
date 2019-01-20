import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="https://api.mlab.com/api/1/databases/shoppingdb/collections/products?"
  apiKey="apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  cartProducts=[];
  cartLengthEvent$;
  constructor(private http:HttpClient) { 
    this.cartLengthEvent$ = new EventEmitter();
  }
  addProductToCart(product){
    this.cartProducts.push(product);    
    this.cartLengthEvent$.emit();
    console.log(this.cartProducts)
  }
  getAllProducts(){
    return this.http.get(this.url+this.apiKey);
  }
  getProductDetailsById(){

  }
  addProductDetails(){

  }
  editProductDetails(){

  }
}
