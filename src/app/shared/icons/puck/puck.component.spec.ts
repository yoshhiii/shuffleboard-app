import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuckComponent } from './puck.component';

describe('PuckComponent', () => {
  let component: PuckComponent;
  let fixture: ComponentFixture<PuckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuckComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
