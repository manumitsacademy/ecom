import { ProductComponent } from "./product/product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import {CartComponent} from './cart/cart.component';

export const routes = [
    {
        path:'products',
        component:ProductComponent
    },
    {
        path:'productdetails/:id',
        component:ProductDetailsComponent
    },
    {
        path:'cart',
        component:CartComponent
    }
]