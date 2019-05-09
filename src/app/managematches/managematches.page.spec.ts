import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagematchesPage } from './managematches.page';

describe('ManagematchesPage', () => {
  let component: ManagematchesPage;
  let fixture: ComponentFixture<ManagematchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagematchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagematchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
