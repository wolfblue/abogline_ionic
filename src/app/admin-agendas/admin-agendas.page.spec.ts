import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAgendasPage } from './admin-agendas.page';

describe('AdminAgendasPage', () => {
  let component: AdminAgendasPage;
  let fixture: ComponentFixture<AdminAgendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgendasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAgendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
