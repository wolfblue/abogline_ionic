import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteAbogadoPage } from './cliente-abogado.page';

describe('ClienteAbogadoPage', () => {
  let component: ClienteAbogadoPage;
  let fixture: ComponentFixture<ClienteAbogadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteAbogadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteAbogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
