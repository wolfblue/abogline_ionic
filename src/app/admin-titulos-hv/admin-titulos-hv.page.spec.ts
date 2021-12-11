import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminTitulosHvPage } from './admin-titulos-hv.page';

describe('AdminTitulosHvPage', () => {
  let component: AdminTitulosHvPage;
  let fixture: ComponentFixture<AdminTitulosHvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTitulosHvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTitulosHvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
