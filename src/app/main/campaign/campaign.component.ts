import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent {
  constructor(private router: Router) { }
  activeid = 1
  Level: any
  Access: any
  ngOnInit() {
    this.Level = Number(localStorage.getItem('CampLevel'))
    this.activeid = 1 + +this.Level
    this.Access = localStorage.getItem('Access')
  }

  gamePlay() {
    //  if(this.Access=="true"){
    this.router.navigate(['/gp-Camp'])
    // }
    //  else if(this.Access=="false" && this.Level!=0){
    //   $('#campaign1').modal('show');   
    //  }
    // else if(this.Level==0) {
    //   this.router.navigate(['/gp-Camp'])
    //  }
  }

  openAlert(id: number) {
    if (this.Level != id) {
      $('#alert').modal('show');
    }
  }
  Active(data: number) {
    if (this.Level == data - 1) {
      this.activeid = data
    }

  }
}
