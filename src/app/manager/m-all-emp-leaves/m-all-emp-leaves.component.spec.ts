import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAllEmpLeavesComponent } from './m-all-emp-leaves.component';

describe('MAllEmpLeavesComponent', () => {
  let component: MAllEmpLeavesComponent;
  let fixture: ComponentFixture<MAllEmpLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAllEmpLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAllEmpLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
