import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminNosotrosPage } from './admin-nosotros.page';

describe('AdminNosotrosPage', () => {
  let component: AdminNosotrosPage;
  let fixture: ComponentFixture<AdminNosotrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNosotrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminNosotrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
