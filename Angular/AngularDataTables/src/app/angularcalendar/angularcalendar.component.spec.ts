import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcalendarComponent } from './angularcalendar.component';

describe('AngularcalendarComponent', () => {
  let component: AngularcalendarComponent;
  let fixture: ComponentFixture<AngularcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
