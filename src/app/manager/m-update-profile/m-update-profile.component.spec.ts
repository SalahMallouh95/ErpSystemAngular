import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUpdateProfileComponent } from './m-update-profile.component';

describe('MUpdateProfileComponent', () => {
  let component: MUpdateProfileComponent;
  let fixture: ComponentFixture<MUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
