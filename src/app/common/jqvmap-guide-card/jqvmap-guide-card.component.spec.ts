import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqvmapGuideCardComponent } from './jqvmap-guide-card.component';

describe('JqvmapGuideCardComponent', () => {
  let component: JqvmapGuideCardComponent;
  let fixture: ComponentFixture<JqvmapGuideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqvmapGuideCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqvmapGuideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
