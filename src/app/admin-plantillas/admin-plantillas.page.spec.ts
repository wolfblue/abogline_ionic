import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminPlantillasPage } from './admin-plantillas.page';

describe('AdminPlantillasPage', () => {
  let component: AdminPlantillasPage;
  let fixture: ComponentFixture<AdminPlantillasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlantillasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPlantillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
