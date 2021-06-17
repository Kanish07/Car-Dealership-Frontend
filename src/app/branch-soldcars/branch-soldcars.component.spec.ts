import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSoldcarsComponent } from './branch-soldcars.component';

describe('BranchSoldcarsComponent', () => {
  let component: BranchSoldcarsComponent;
  let fixture: ComponentFixture<BranchSoldcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchSoldcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchSoldcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
