import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultarDocumentacionPage } from './consultar-documentacion.page';

describe('ConsultarDocumentacionPage', () => {
  let component: ConsultarDocumentacionPage;
  let fixture: ComponentFixture<ConsultarDocumentacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarDocumentacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarDocumentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
