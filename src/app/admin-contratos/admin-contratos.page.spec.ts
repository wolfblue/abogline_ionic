import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminContratosPage } from './admin-contratos.page';

describe('AdminContratosPage', () => {
  let component: AdminContratosPage;
  let fixture: ComponentFixture<AdminContratosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminContratosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminContratosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
