import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteDetalleAbogadoPage } from './cliente-detalle-abogado.page';

describe('ClienteDetalleAbogadoPage', () => {
  let component: ClienteDetalleAbogadoPage;
  let fixture: ComponentFixture<ClienteDetalleAbogadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetalleAbogadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteDetalleAbogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
