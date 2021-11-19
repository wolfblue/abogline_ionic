import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminGeneroPage } from './admin-genero.page';

describe('AdminGeneroPage', () => {
  let component: AdminGeneroPage;
  let fixture: ComponentFixture<AdminGeneroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGeneroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminGeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
