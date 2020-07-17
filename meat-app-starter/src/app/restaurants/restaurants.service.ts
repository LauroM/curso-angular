import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import {MEAT_API} from 'app/app.api';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ErrorHandler} from 'app/app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService{

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant []>{
        return this.http.get(`${MEAT_API}/api/Restaurants`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError);
    }

    restaurantsById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/api/Restaurants/${id}`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/api/Restaurants/${id}/reviews`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id:string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/api/Restaurants/${id}/menu`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError);
    }
}