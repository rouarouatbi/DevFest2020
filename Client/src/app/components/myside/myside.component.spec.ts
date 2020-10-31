import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysideComponent } from './myside.component';

describe('MysideComponent', () => {
  let component: MysideComponent;
  let fixture: ComponentFixture<MysideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
