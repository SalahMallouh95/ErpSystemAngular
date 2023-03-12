import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsManageComponent } from './about-us-manage.component';

describe('AboutUsManageComponent', () => {
  let component: AboutUsManageComponent;
  let fixture: ComponentFixture<AboutUsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
