import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarCasosPage } from './buscar-casos.page';

describe('BuscarCasosPage', () => {
  let component: BuscarCasosPage;
  let fixture: ComponentFixture<BuscarCasosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCasosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarCasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
