import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAsComponent } from './profile-as.component';

describe('ProfileAsComponent', () => {
  let component: ProfileAsComponent;
  let fixture: ComponentFixture<ProfileAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
