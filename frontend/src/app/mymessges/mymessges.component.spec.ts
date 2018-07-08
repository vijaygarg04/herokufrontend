import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymessgesComponent } from './mymessges.component';

describe('MymessgesComponent', () => {
  let component: MymessgesComponent;
  let fixture: ComponentFixture<MymessgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymessgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymessgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
