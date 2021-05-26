import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbogadoCasoProcesoPage } from './abogado-caso-proceso.page';

describe('AbogadoCasoProcesoPage', () => {
  let component: AbogadoCasoProcesoPage;
  let fixture: ComponentFixture<AbogadoCasoProcesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbogadoCasoProcesoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbogadoCasoProcesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
