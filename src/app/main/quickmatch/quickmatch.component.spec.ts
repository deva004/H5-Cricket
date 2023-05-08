import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickmatchComponent } from './quickmatch.component';

describe('QuickmatchComponent', () => {
  let component: QuickmatchComponent;
  let fixture: ComponentFixture<QuickmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickmatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
