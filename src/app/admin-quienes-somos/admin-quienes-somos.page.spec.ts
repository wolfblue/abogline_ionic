import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminQuienesSomosPage } from './admin-quienes-somos.page';

describe('AdminQuienesSomosPage', () => {
  let component: AdminQuienesSomosPage;
  let fixture: ComponentFixture<AdminQuienesSomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminQuienesSomosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminQuienesSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
