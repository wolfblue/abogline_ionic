import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespuestaPagosPage } from './respuesta-pagos.page';

describe('RespuestaPagosPage', () => {
  let component: RespuestaPagosPage;
  let fixture: ComponentFixture<RespuestaPagosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaPagosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespuestaPagosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
