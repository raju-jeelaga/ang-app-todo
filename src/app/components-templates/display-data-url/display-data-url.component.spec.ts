import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataUrlComponent } from './display-data-url.component';

describe('DisplayDataUrlComponent', () => {
  let component: DisplayDataUrlComponent;
  let fixture: ComponentFixture<DisplayDataUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDataUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
