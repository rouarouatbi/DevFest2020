import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilVComponent } from './accueil-v.component';

describe('AccueilVComponent', () => {
  let component: AccueilVComponent;
  let fixture: ComponentFixture<AccueilVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
