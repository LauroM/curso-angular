import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[]= [
    {label:'Dinheiro', value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label:'Cartão Refeição', value:'REF'}
  ]
  delivery: number = 8;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue():number{
    return this.orderService.itemsValue();
  }

  cartItems(){
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  DecreaseQty(item: CartItem){
    this.orderService.DecreaseQty(item);
  }

  remove(item: CartItem){
    this.orderService.remove(item);
  }


}
