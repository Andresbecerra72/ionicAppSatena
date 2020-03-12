import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidmodalPage } from './covidmodal.page';

describe('CovidmodalPage', () => {
  let component: CovidmodalPage;
  let fixture: ComponentFixture<CovidmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
