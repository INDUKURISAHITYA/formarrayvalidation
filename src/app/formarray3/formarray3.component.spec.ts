import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formarray3Component } from './formarray3.component';

describe('Formarray3Component', () => {
  let component: Formarray3Component;
  let fixture: ComponentFixture<Formarray3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formarray3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formarray3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
