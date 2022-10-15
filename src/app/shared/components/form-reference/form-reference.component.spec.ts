import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReferenceComponent } from './form-reference.component';

describe('FormReferenceComponent', () => {
  let component: FormReferenceComponent;
  let fixture: ComponentFixture<FormReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
