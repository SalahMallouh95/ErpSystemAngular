import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoManageComponent } from './contact-info-manage.component';

describe('ContactInfoManageComponent', () => {
  let component: ContactInfoManageComponent;
  let fixture: ComponentFixture<ContactInfoManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
