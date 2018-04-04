import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesCardComponent } from './hobbies-card.component';

describe('HobbiesCardComponent', () => {
  let component: HobbiesCardComponent;
  let fixture: ComponentFixture<HobbiesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
