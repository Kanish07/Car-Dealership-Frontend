import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchLoginComponent } from './branch-login.component';

describe('BranchLoginComponent', () => {
  let component: BranchLoginComponent;
  let fixture: ComponentFixture<BranchLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
