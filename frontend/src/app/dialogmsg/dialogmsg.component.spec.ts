import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmsgComponent } from './dialogmsg.component';

describe('DialogmsgComponent', () => {
  let component: DialogmsgComponent;
  let fixture: ComponentFixture<DialogmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
