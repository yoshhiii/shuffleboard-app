import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTab } from './score.tab';

describe('Tab1Page', () => {
  let component: ScoreTab;
  let fixture: ComponentFixture<ScoreTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreTab],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
