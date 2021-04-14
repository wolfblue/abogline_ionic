import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteBuscarCasoPage } from './cliente-buscar-caso.page';

describe('ClienteBuscarCasoPage', () => {
  let component: ClienteBuscarCasoPage;
  let fixture: ComponentFixture<ClienteBuscarCasoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteBuscarCasoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteBuscarCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
