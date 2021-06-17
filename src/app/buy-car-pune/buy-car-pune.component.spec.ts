import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarPuneComponent } from './buy-car-pune.component';

describe('BuyCarPuneComponent', () => {
  let component: BuyCarPuneComponent;
  let fixture: ComponentFixture<BuyCarPuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCarPuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCarPuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
