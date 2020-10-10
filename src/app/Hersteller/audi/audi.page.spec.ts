import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudiPage } from './audi.page';

describe('AudiPage', () => {
  let component: AudiPage;
  let fixture: ComponentFixture<AudiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
