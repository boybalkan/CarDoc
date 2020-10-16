import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreStartPage } from './pre-start.page';

describe('PreStartPage', () => {
  let component: PreStartPage;
  let fixture: ComponentFixture<PreStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreStartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
