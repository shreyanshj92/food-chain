import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorCollectionFormComponent } from './distributor-collection-form.component';

describe('DistributorCollectionFormComponent', () => {
  let component: DistributorCollectionFormComponent;
  let fixture: ComponentFixture<DistributorCollectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorCollectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorCollectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
