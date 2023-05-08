import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
 /* Level:any
  Coin:any
  starcoin:any
  Access:any
  mainLevel:any;
  CampLevel:any
  userName:any
  userImg:any
  constructor() { }

  initial(){
    this.Level=localStorage.getItem('Level')
    this.mainLevel=localStorage.getItem('MainLevel')
    this.CampLevel=localStorage.getItem('CampLevel')
    this.Coin= Number(localStorage.getItem('Coin'))
    this.Access=localStorage.getItem('Access')
    this.starcoin= Number(localStorage.getItem('Starcoin'))
    this.userName=localStorage.getItem('userName')
    this.userImg=localStorage.getItem('userImg')


    if(this.Access==null|| this.Access=="undefined" || this.Access==" "){
      localStorage.setItem('Access',"false")
      this.Access=localStorage.getItem('Access')
    }
    if(this.Level==null){
      localStorage.setItem('Level','0');
      this.Level=localStorage.getItem('Level')
  }
    if(this.CampLevel==null){
      localStorage.setItem('CampLevel','0');
      this.CampLevel=localStorage.getItem('CampLevel')
  }
    if( this.mainLevel==null){
      localStorage.setItem('MainLevel','0');
      this.mainLevel=localStorage.getItem('CampLevel')
    }
  }


  quickplay(data:any){
   
    localStorage.setItem('Level',data)
    this.Level=localStorage.getItem('Level')
  }*/

    routeFunction(): Promise<string> {
      return new Promise((resolve, reject) => {
        //@ts-ignore
        window  ['rewardEvent']((response: string) => {
          resolve(response);
        });
      });
    }


}