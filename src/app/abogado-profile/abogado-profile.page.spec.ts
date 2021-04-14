import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbogadoProfilePage } from './abogado-profile.page';

describe('AbogadoProfilePage', () => {
  let component: AbogadoProfilePage;
  let fixture: ComponentFixture<AbogadoProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbogadoProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbogadoProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
