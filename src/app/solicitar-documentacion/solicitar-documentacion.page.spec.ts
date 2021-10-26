import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitarDocumentacionPage } from './solicitar-documentacion.page';

describe('SolicitarDocumentacionPage', () => {
  let component: SolicitarDocumentacionPage;
  let fixture: ComponentFixture<SolicitarDocumentacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarDocumentacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitarDocumentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
