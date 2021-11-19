import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminTipoDocumentoPage } from './admin-tipo-documento.page';

describe('AdminTipoDocumentoPage', () => {
  let component: AdminTipoDocumentoPage;
  let fixture: ComponentFixture<AdminTipoDocumentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTipoDocumentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTipoDocumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
