import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargarDocumentacionPage } from './cargar-documentacion.page';

describe('CargarDocumentacionPage', () => {
  let component: CargarDocumentacionPage;
  let fixture: ComponentFixture<CargarDocumentacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarDocumentacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargarDocumentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
