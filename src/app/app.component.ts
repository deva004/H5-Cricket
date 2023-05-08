import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';

//declare function  addLeaderBoard():void

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cricket Stars';

  device: boolean = true
  @Input() inputProp: any
  constructor() {
  }

  show: boolean = false
  docElement: any;
  isFullscreen: boolean = false;
  popup = false
  Loadcompleted = false
  ngOnInit(): void {
    // gameLoad()
    //Glance start

    this.Loadcompleted = true;
    localStorage.setItem('start', "false")
    //Glance End
    //  this.data.initial()
    this.docElement = document.documentElement;
    this.dev()
    window.innerHeight === screen.height
    document.addEventListener("fullscreenchange", () => this.checkFullscreen());
    this.checkFullscreen();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.checkFullscreen()
  }
  checkFullscreen() {
    if (this.isFullscreen = (document.fullscreenElement !== null)) {
      this.popup = false
    }
    else {
      this.popup = true
    }
  }
  toggleFullScreen() {
    this.docElement.requestFullscreen();
    this.docElement.webkitRequestFullscreen();
  }
  landscape() {
    screen.orientation.lock('landscape')
  }



  dev() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      this.device = false;
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      this.device = false;
    }
    else {
      this.device = true;
    }
  };


}