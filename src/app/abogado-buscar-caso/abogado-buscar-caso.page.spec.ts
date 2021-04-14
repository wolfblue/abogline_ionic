import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbogadoBuscarCasoPage } from './abogado-buscar-caso.page';

describe('AbogadoBuscarCasoPage', () => {
  let component: AbogadoBuscarCasoPage;
  let fixture: ComponentFixture<AbogadoBuscarCasoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbogadoBuscarCasoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbogadoBuscarCasoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
