import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenNumberTypeComponent } from './phonen-number-type.component';

describe('PhonenNumberTypeComponent', () => {
  let component: PhonenNumberTypeComponent;
  let fixture: ComponentFixture<PhonenNumberTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonenNumberTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonenNumberTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
