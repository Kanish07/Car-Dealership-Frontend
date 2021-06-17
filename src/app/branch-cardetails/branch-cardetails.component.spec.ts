import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchCardetailsComponent } from './branch-cardetails.component';

describe('BranchCardetailsComponent', () => {
  let component: BranchCardetailsComponent;
  let fixture: ComponentFixture<BranchCardetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchCardetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchCardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
