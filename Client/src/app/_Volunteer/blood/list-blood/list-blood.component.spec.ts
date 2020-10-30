import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBloodComponent } from './list-blood.component';

describe('ListBloodComponent', () => {
  let component: ListBloodComponent;
  let fixture: ComponentFixture<ListBloodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBloodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBloodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
