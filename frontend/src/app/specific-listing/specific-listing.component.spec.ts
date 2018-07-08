import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificListingComponent } from './specific-listing.component';

describe('SpecificListingComponent', () => {
  let component: SpecificListingComponent;
  let fixture: ComponentFixture<SpecificListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
