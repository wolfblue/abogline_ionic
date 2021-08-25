import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbogadosPage } from './abogados.page';

describe('AbogadosPage', () => {
  let component: AbogadosPage;
  let fixture: ComponentFixture<AbogadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbogadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbogadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
