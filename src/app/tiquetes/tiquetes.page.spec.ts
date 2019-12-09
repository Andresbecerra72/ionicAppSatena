import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiquetesPage } from './tiquetes.page';

describe('Tab1Page', () => {
  let component: TiquetesPage;
  let fixture: ComponentFixture<TiquetesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TiquetesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiquetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
