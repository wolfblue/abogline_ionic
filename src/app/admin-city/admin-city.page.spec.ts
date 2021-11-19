import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminCityPage } from './admin-city.page';

describe('AdminCityPage', () => {
  let component: AdminCityPage;
  let fixture: ComponentFixture<AdminCityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
