import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPoliticaPage } from './admin-politica.page';

describe('AdminPoliticaPage', () => {
  let component: AdminPoliticaPage;
  let fixture: ComponentFixture<AdminPoliticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPoliticaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPoliticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
