import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarChennaiComponent } from './buy-car-chennai.component';

describe('BuyCarChennaiComponent', () => {
  let component: BuyCarChennaiComponent;
  let fixture: ComponentFixture<BuyCarChennaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCarChennaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCarChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
