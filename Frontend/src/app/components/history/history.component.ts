import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/order';
import { OrderservService } from 'src/app/orderserv.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderservService) {
    this.orders = [];
   }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders()
  {
    this.orderService.getOrdersList().subscribe(data => {
      this.orders = data;
    });
  }

}
