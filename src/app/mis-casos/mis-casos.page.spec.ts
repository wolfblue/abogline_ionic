import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisCasosPage } from './mis-casos.page';

describe('MisCasosPage', () => {
  let component: MisCasosPage;
  let fixture: ComponentFixture<MisCasosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisCasosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisCasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
