import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEmpInfoComponent } from './m-emp-info.component';

describe('MEmpInfoComponent', () => {
  let component: MEmpInfoComponent;
  let fixture: ComponentFixture<MEmpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEmpInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEmpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
