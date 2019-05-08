import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTab } from './team.tab';

describe('TeamTab', () => {
  let component: TeamTab;
  let fixture: ComponentFixture<TeamTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamTab],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
