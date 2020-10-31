import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDonationListComponent } from './other-donation-list.component';

describe('OtherDonationListComponent', () => {
  let component: OtherDonationListComponent;
  let fixture: ComponentFixture<OtherDonationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherDonationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDonationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
