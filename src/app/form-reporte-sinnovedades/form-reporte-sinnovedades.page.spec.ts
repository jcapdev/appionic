import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormReporteSinnovedadesPage } from './form-reporte-sinnovedades.page';

describe('FormReporteSinnovedadesPage', () => {
  let component: FormReporteSinnovedadesPage;
  let fixture: ComponentFixture<FormReporteSinnovedadesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReporteSinnovedadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormReporteSinnovedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
