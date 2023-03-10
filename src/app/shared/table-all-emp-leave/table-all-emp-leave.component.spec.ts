import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAllEmpLeaveComponent } from './table-all-emp-leave.component';

describe('TableAllEmpLeaveComponent', () => {
  let component: TableAllEmpLeaveComponent;
  let fixture: ComponentFixture<TableAllEmpLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAllEmpLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAllEmpLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
