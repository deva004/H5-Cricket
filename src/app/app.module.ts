import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { HeaderComponent } from './main/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserComponent } from './main/user/user.component';
import { StoreService } from './services/store.service';
import { QuickmatchComponent } from './main/quickmatch/quickmatch.component';
import { CampaignComponent } from './main/campaign/campaign.component';
import { GameplayCampaignComponent } from './main/gameplay-campaign/gameplay-campaign.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    QuickmatchComponent,
    CampaignComponent,
    GameplayCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [StoreService, { provide: LocationStrategy, useClass: HashLocationStrategy, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
