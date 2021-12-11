import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAcercaPage } from './admin-acerca.page';

describe('AdminAcercaPage', () => {
  let component: AdminAcercaPage;
  let fixture: ComponentFixture<AdminAcercaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAcercaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAcercaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
