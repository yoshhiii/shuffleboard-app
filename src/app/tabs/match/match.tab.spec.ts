import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTab } from './match.tab';

describe('Tab2Page', () => {
  let component: MatchTab;
  let fixture: ComponentFixture<MatchTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatchTab],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
