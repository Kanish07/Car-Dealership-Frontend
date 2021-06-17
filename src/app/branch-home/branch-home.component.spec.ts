import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchHomeComponent } from './branch-home.component';

describe('BranchHomeComponent', () => {
  let component: BranchHomeComponent;
  let fixture: ComponentFixture<BranchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
