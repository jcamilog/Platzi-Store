import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../../../product.model';

import { CartService } from './../../../core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent{

@Input() product: Product;
@Output() productClick: EventEmitter<any> = new EventEmitter();

today = new Date();

constructor(
    private cartService: CartService
){}

addCart(){
    console.log("add cart");
    this.productClick.emit(this.product.id);
    this.cartService.addCart(this.product);
}

};