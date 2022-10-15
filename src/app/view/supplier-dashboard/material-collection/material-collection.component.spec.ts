import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCollectionComponent } from './material-collection.component';

describe('MaterialCollectionComponent', () => {
  let component: MaterialCollectionComponent;
  let fixture: ComponentFixture<MaterialCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
