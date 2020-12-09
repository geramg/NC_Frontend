import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addPepp()
  {
    this.cartService.addPepp();
    window.alert('Pepperoni pizza added to cart');
  }

  addCheese()
  {
    this.cartService.addCheese();
    window.alert('Cheese pizza added to cart');
  }

}
