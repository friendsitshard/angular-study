import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count:number = 0

  addCount(){
    this.count++
  }

  lowerCount(){
    this.count--
  }

  refreshCount(){
    this.count = 0
  }

  getCounterColor(){
    if (this.count < 0) {
      return "red"
    }
    else if (this.count > 0) {
      return "blue"
    }
    else{
      return "black"
    }
  }

}
