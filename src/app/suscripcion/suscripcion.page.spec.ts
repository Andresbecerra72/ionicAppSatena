import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionPage } from './suscripcion.page';

describe('SuscripcionPage', () => {
  let component: SuscripcionPage;
  let fixture: ComponentFixture<SuscripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscripcionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
