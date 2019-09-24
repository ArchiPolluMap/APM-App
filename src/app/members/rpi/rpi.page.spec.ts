import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RPiPage } from './rpi.page';

describe('RPiPage', () => {
  let component: RPiPage;
  let fixture: ComponentFixture<RPiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RPiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RPiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
