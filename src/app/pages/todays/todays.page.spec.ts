import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysPage } from './todays.page';

describe('TodaysPage', () => {
  let component: TodaysPage;
  let fixture: ComponentFixture<TodaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
