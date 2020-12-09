import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HistoryComponent } from './components/history/history.component';
import { PizzaComponent } from './components/pizza/pizza.component';

const routes: Routes = [
  {path: 'pizza', component: PizzaComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: '/pizza'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
