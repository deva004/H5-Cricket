import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userName: any
  usedat = localStorage.getItem('userName');
  profileIcon = false
  userDetails = true
  selectedImg = 'Profilepic_1'

  ngOnInit(): void {
    if (this.usedat != '' || this.usedat != null || this.usedat != "undefined") {
      this.router.navigate(['']);
    }
  }
  img = ['Profilepic_1', 'Profilepic_2', 'Profilepic_3', 'Profilepic_4', 'Profilepic_5', 'Profilepic_6', 'Profilepic_7', 'Profilepic_8',]
  constructor(private router: Router) { }
  setUserName(data: any) {

    if (data != '' && data != null && data != "undefined") {
      localStorage.setItem('userName', data)
      localStorage.setItem('Coin', '300')
      localStorage.setItem('Starcoin', '0')
      localStorage.setItem('userImg', 'Avatar_User')
      this.userDetails = false
      this.profileIcon = true
    }


    if (data == "undefined" || data == '') {
      alert("Please Enter Your Name")
    }
  }

  setdp(data: any) {
    this.router.navigate(['']);
    localStorage.setItem('userName', 'Glance_user')
    localStorage.setItem('userImg', data)
    localStorage.setItem('Coin', '300')
    localStorage.setItem('Starcoin', '0')
  }
  selected(i: number) {
    this.selectedImg = this.img[i]
  }

}
