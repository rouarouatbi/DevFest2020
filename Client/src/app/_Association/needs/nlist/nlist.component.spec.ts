import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlistComponent } from './nlist.component';

describe('NlistComponent', () => {
  let component: NlistComponent;
  let fixture: ComponentFixture<NlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
