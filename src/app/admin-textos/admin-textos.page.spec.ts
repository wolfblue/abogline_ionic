import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminTextosPage } from './admin-textos.page';

describe('AdminTextosPage', () => {
  let component: AdminTextosPage;
  let fixture: ComponentFixture<AdminTextosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTextosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTextosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
