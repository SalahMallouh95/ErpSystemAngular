import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLeavesComponent } from './m-leaves.component';

describe('MLeavesComponent', () => {
  let component: MLeavesComponent;
  let fixture: ComponentFixture<MLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
