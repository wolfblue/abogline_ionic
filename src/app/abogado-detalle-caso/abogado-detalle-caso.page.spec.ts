import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbogadoDetalleCasoPage } from './abogado-detalle-caso.page';

describe('AbogadoDetalleCasoPage', () => {
  let component: AbogadoDetalleCasoPage;
  let fixture: ComponentFixture<AbogadoDetalleCasoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbogadoDetalleCasoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbogadoDetalleCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
