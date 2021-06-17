import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarBengaluruComponent } from './buy-car-bengaluru.component';

describe('BuyCarBengaluruComponent', () => {
  let component: BuyCarBengaluruComponent;
  let fixture: ComponentFixture<BuyCarBengaluruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCarBengaluruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCarBengaluruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
