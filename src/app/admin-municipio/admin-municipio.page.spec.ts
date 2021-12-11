import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminMunicipioPage } from './admin-municipio.page';

describe('AdminMunicipioPage', () => {
  let component: AdminMunicipioPage;
  let fixture: ComponentFixture<AdminMunicipioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMunicipioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMunicipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
