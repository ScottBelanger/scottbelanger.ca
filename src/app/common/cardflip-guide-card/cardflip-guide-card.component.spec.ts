import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardflipGuideCardComponent } from './cardflip-guide-card.component';

describe('CardflipGuideCardComponent', () => {
  let component: CardflipGuideCardComponent;
  let fixture: ComponentFixture<CardflipGuideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardflipGuideCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardflipGuideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
