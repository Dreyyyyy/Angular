import { Injectable } from '@angular/core';
import { IProductCart } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProductCart[] = [];

  constructor() { }

  getCart() {
    return JSON.parse(localStorage.getItem("cart") || "");
  }

  addToCart(product: IProductCart) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  freeCart() {
    this.items = [];
    localStorage.clear();
  }
}
