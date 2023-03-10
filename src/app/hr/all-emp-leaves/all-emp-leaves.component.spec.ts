import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpLeavesComponent } from './all-emp-leaves.component';

describe('AllEmpLeavesComponent', () => {
  let component: AllEmpLeavesComponent;
  let fixture: ComponentFixture<AllEmpLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEmpLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEmpLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
