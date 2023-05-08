import { Component } from '@angular/core'
import { Router } from '@angular/router';
declare var $: any;

import 'bootstrap'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  Level: any
  Coin: any
  Hint = ''
  starcoin: any
  Access: any
  routelink = ''
  start: any
  ngOnInit() {
    this.Level = localStorage.getItem('Level')
    this.Coin = Number(localStorage.getItem('Coin'))
    this.start = localStorage.getItem('start')
    this.Hintsfn();
    // this.AccessFn()
    this.starcoin = Number(localStorage.getItem('Starcoin'));
  }

  AccessFn() {
    this.Access = localStorage.getItem('Access')
    if (this.Access == null || this.Access == "undefined" || this.Access == " ") {
      localStorage.setItem('Access', "false")
      this.Access = localStorage.getItem('Access')
    }
  }
  openModal() {
    //if( this.Access=="false"){
    // if(this.Coin>=500){
    this.router.navigate(['/Camp']);
    //  localStorage.setItem('Coin',(this.Coin-500).toString())
    // localStorage.setItem('Access',"true")
    //}
    // else{
    //  $('#campaign3').modal('show'); 
    //}
  }
  // else if(this.Access=="true"){
  //  this.router.navigate(['/Camp']);
  //}



  Hints = ["Slog - Strong against Off-Break",
    " LegGlance - Good against In-Swinger",
    "Cover Drive - Weak against Bouncer",
    "Off Drive - Good against Out-swinger",
    "on Drive - Good against Off-cutter",
    "Flick - Strong against In-swinger",
    "Slog - Good against Pace",
    " Cut - Strong against Pace",
    " Upper Cut - Good against Bouncer",
    "Straight Drive - Good against Pace",
    "Square Cut - Good against Outswinger",
    " Leg Glance - Good against Outswinger",
    "Late Cut  - Good against Leg Cutter"]


  Hintsfn() {
    var randomnumber = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
    this.Hint = this.Hints[randomnumber];

  }
  Audio() {

    let audio = new Audio();
    audio.src = "./assets/sounds/Main-menu.ogg";
    audio.load();
    audio.loop = true
    for (let i = 0; i > 99999; i++) {
      audio.play();
    }

  }
  routeFn(id: number) {
    if (id == 1) {
      this.routelink = '/Qm'


    }
    else if (id == 2) {
      this.routelink = '/Camp'
    }
  }
  openModal1() {
    this.router.navigate(['/Qm']);
    // if(this.Coin>=100){
    // var data =this.Coin-100
    //   localStorage.setItem('Coin',data.toString() )
    //  
    //  }
    // else{
    //   $('#campaign3').modal('show'); 
    // }
  }
  popupFalse() {
    localStorage.setItem('popup', "false")
  }
}
