import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminSolicitudesPage } from './admin-solicitudes.page';

describe('AdminSolicitudesPage', () => {
  let component: AdminSolicitudesPage;
  let fixture: ComponentFixture<AdminSolicitudesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSolicitudesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
