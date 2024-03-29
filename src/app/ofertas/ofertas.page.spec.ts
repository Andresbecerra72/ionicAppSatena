import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertasPage } from './ofertas.page';

describe('OfertasPage', () => {
  let component: OfertasPage;
  let fixture: ComponentFixture<OfertasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfertasPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
