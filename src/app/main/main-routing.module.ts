/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuickmatchComponent } from './quickmatch/quickmatch.component';
import { CampaignComponent } from './campaign/campaign.component';
import { GameplayCampaignComponent } from './gameplay-campaign/gameplay-campaign.component';
import { AuthGuard } from './auth.gaurd';

const config=[
  {
    path:'Qm',
    component:QuickmatchComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path:'Camp',
    component:CampaignComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path:'gp-Camp',
    component:GameplayCampaignComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( config )
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
*/
