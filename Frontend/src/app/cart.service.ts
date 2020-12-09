import { Injectable } from '@angular/core';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  order: Order = new Order();

  constructor() {
    this.order.pepperoni = 0;
    this.order.cheese = 0;
  }

  addPepp()
  {
    this.order.pepperoni += 1;
  }

  addCheese()
  {
    this.order.cheese += 1;
  }

  getCart()
  {
    return this.order;
  }

  clrCart()
  {
    this.order.pepperoni = 0;
    this.order.cheese = 0;
    return this.order;
  }
}
