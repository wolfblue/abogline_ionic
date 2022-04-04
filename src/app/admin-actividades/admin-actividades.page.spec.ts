import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminActividadesPage } from './admin-actividades.page';

describe('AdminActividadesPage', () => {
  let component: AdminActividadesPage;
  let fixture: ComponentFixture<AdminActividadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActividadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminActividadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
