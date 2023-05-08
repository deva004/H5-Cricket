import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AuthGuard } from './main/auth.gaurd';
import { UserComponent } from './main/user/user.component';
import { QuickmatchComponent } from './main/quickmatch/quickmatch.component';
import { CampaignComponent } from './main/campaign/campaign.component';
import { GameplayCampaignComponent } from './main/gameplay-campaign/gameplay-campaign.component';
import { LeaderBoardComponent } from './main/leader-board/leader-board.component';
const routes: Routes = [
              {
                path:'',
                component:HomeComponent,
                canActivate: [AuthGuard],
                canLoad: [AuthGuard]
               
              },
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
              {
                path:'user',
                component:UserComponent
              },
              { path: '**', redirectTo: '', canActivate: [AuthGuard], canLoad: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled',useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 

}
