
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'restaurant-directory',
  templateUrl: './restaurantDirectory.component.html',
  styleUrls: ['./restaurantDirectory.component.scss']
})
export class RestaurantDirectory implements OnInit {

  restaurantName: string = '';
  restaurantCity: string = '';
  restaurants: any[] = []

  constructor() { }

  onRestaurantAdd() {
    if(this.restaurantName.trim() !== '' && this.restaurantCity.trim() !== '') {
      this.restaurants.push({restaurantName: this.restaurantName, restaurantCity: this.restaurantCity})
      this.restaurantName = '';
      this.restaurantCity = '';
    }
  }

  ngOnInit() {

  }
}
