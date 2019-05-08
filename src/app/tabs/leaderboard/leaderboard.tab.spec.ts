import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardTab } from './leaderboard.tab';

describe('Tab3Page', () => {
  let component: LeaderboardTab;
  let fixture: ComponentFixture<LeaderboardTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardTab],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
