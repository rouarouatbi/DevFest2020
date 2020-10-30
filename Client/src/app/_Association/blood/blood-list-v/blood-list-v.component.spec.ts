import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodListVComponent } from './blood-list-v.component';

describe('BloodListVComponent', () => {
  let component: BloodListVComponent;
  let fixture: ComponentFixture<BloodListVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodListVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodListVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
