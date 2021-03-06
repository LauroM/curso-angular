import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";

@Injectable()
export class ShoppingCartService{
    items: CartItem[] = [];

    constructor(private notificationsService: NotificationService){}

    clear(){
        this.items = []
    }

    addItem(item:MenuItem){
        let foundItem = this.items.find( (mitem) => mitem.menuItem.MenuId === item.MenuId );

        if(foundItem){
            this.increaseQty(foundItem);
        }else{
            this.items.push(new CartItem(item));
        }
        this.notificationsService.notify(`Você adicionou o item ${item.Name}`);
    }

    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item,1));
        this.notificationsService.notify(`Você removeu o item ${item.menuItem.Name}`);
    }

    total(): number{
        return this.items.map(item=> item.value())
                        .reduce((prev,value)=>prev+value,0);
    }

    increaseQty(item:CartItem){
        item.quantity = item.quantity + 1;
    }

    DecreaseQty(item:CartItem){
        item.quantity = item.quantity - 1;
        if(item.quantity===0){
            this.removeItem(item);
        }
    }
}