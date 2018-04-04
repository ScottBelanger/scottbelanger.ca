import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingBackgroundComponent } from './programming-background.component';

describe('ProgrammingBackgroundComponent', () => {
  let component: ProgrammingBackgroundComponent;
  let fixture: ComponentFixture<ProgrammingBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammingBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
