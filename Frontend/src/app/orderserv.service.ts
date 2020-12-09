import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Order } from 'src/app/order';

@Injectable({
  providedIn: 'root'
})
export class OrderservService {

  private baseURL = "http://localhost:8080/api/v1/orders";

  constructor(private httpClient: HttpClient) { }

  getOrdersList(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.baseURL);
  }

  createOrder(order: Order): Observable<Object>{
    return this.httpClient.post(this.baseURL, order);
  }
}
