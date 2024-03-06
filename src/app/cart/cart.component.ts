import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  sum:number = 0
  coupon:string = ""
  disc:number = 0

  items:any[] = [
    {"title": "Batis bumbuli", "size":"Small", "color":"Red", "material":"Wings", "seller": "L'one co.", "price": 125, "quantity":1},
    {"title": "Viris fexebi", "size":"Big", "color":"Gray", "material":"Legs", "seller": "NATO", "price": 49, "quantity":1},
    {"title": "Bus kvercxebi", "size":"Medium", "color":"White", "material":"Eggs", "seller": "Kukareku", "price": 80, "quantity":1}
  ]

  coupones:any[] = [
    {"code": "A1G5", "discount": 50},
    {"code": "B9D4", "discount": 15},
    {"code": "CC9I", "discount": 25},
    {"code": "ISQ2", "discount": 99},
  ]

  removeItem(i:number){
    this.items.splice(i, 1);
  }

  removeAll(){
    this.items = []
  }

  reload(){
    window.location.reload();
  }

  addQty(i:number){
    this.items[i].quantity++
  }

  minusQty(i:number){
    if (this.items[i].quantity > 1) { 
      this.items[i].quantity--
    }
  }

  countSubtotal(){
    this.sum = 0

    this.items.forEach(item => {
      this.sum += item.price * item.quantity
    });

    return this.sum
  }

  countTax(){
    this.sum = 0

    this.items.forEach(item => {
      this.sum += item.price * item.quantity
    });

    return this.sum/200
  }

  countDiscount(){
    this.disc = 0

    this.coupones.forEach(item => {
      if (item.code == this.coupon) {
        this.disc = item.discount/100
      }
    });
  }
}
