import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Order } from 'src/app/order';
import { OrderservService } from 'src/app/orderserv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order: Order = new Order()
  Total!: number;

  constructor(private orderService: OrderservService, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.order = this.cartService.getCart();
    this.Total = this.order.cheese + this.order.pepperoni;
  }

  SaveEmployee()
  {
    this.orderService.createOrder(this.order).subscribe(data =>{
      console.log(data);
      this.gotoOrderList();
    },
    error => console.log(error));
  }

  gotoOrderList()
  {
    this.router.navigate(['/pizza']);
  }

  onSubmit()
  {
    if(this.order.cheese == 0 && this.order.pepperoni == 0)
    {
      window.alert('Cart Empty');
    }else{
      this.order.date = new Date().toISOString();
      console.log(this.order);
      this.SaveEmployee();
    }
  }
}
