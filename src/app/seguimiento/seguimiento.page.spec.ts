import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguimientoPage } from './seguimiento.page';

describe('SeguimientoPage', () => {
  let component: SeguimientoPage;
  let fixture: ComponentFixture<SeguimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
