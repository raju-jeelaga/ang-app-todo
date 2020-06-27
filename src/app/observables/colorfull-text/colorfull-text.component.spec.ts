import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfullTextComponent } from './colorfull-text.component';

describe('ColorfullTextComponent', () => {
  let component: ColorfullTextComponent;
  let fixture: ComponentFixture<ColorfullTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfullTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfullTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
