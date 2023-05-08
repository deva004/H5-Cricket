import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: any;
  Starcoin: any
  Coin: any
  userImg: any
  Level: any
  counter = 0;
  constructor() {

  }
  ngOnInit() {
    this.Level = Number(localStorage.getItem('Level'))
    this.userName = localStorage.getItem('userName');
    this.Starcoin = localStorage.getItem('Starcoin')
    this.userImg = localStorage.getItem('userImg');
    this.Coin = localStorage.getItem('Coin');
    this.coinUpdate()
  }
  coinUpdate() {
    const interval = setInterval(() => {
      if (this.counter < 40) {
        this.Coin = localStorage.getItem('Coin')
        this.counter++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }
}
