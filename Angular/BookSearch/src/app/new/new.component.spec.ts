import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { NewComponent } from './new.component';

describe('BannerComponent', () => {

  let comp:    NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
      //TestBed create an angular testing NgModule
      //configureTestingModule method configures TestBed to produce module testing environment for our test class
    TestBed.configureTestingModule({
      declarations: [ NewComponent ],
    });

    fixture = TestBed.createComponent(NewComponent);
    //query method takes a predicate function and searches for Dom to satisfy first element
    //By class => Angular testing utility that produces useful predicates
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    //assigns the DOM element from the DebugElement nativeElement property to el
    el = de.nativeElement;
  });

  it('should display original title', () => {
      fixture.detectChanges();
      expect(el.textContent).toContain(comp.title);
    });

    it('should display a different test title', () => {
      comp.title = 'Test Title';
      fixture.detectChanges();
      expect(el.textContent).toContain('Test Title');
    });
    it('no title in the DOM until manually call `detectChanges`', () => {
      expect(el.textContent).toEqual('');
    });
});
