import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLeaveDetailsComponent } from './m-leave-details.component';

describe('MLeaveDetailsComponent', () => {
  let component: MLeaveDetailsComponent;
  let fixture: ComponentFixture<MLeaveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLeaveDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLeaveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
