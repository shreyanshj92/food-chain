import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanedComponent } from './cleaned.component';

describe('CleanedComponent', () => {
  let component: CleanedComponent;
  let fixture: ComponentFixture<CleanedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
