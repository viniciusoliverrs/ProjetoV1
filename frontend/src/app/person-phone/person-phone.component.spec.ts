import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPhoneComponent } from './person-phone.component';

describe('PersonPhoneComponent', () => {
  let component: PersonPhoneComponent;
  let fixture: ComponentFixture<PersonPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
