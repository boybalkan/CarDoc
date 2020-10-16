import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavproductComponent } from './favproduct.component';

describe('FavproductComponent', () => {
  let component: FavproductComponent;
  let fixture: ComponentFixture<FavproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavproductComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
