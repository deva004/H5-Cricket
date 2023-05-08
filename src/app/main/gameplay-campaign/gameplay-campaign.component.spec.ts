import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayCampaignComponent } from './gameplay-campaign.component';

describe('GameplayCampaignComponent', () => {
  let component: GameplayCampaignComponent;
  let fixture: ComponentFixture<GameplayCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameplayCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameplayCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
