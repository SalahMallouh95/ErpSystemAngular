import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawAllEmpLeaveComponent } from './raw-all-emp-leave.component';

describe('RawAllEmpLeaveComponent', () => {
  let component: RawAllEmpLeaveComponent;
  let fixture: ComponentFixture<RawAllEmpLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawAllEmpLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawAllEmpLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
