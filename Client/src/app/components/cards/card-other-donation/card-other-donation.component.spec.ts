import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOtherDonationComponent } from './card-other-donation.component';

describe('CardOtherDonationComponent', () => {
  let component: CardOtherDonationComponent;
  let fixture: ComponentFixture<CardOtherDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOtherDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOtherDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
