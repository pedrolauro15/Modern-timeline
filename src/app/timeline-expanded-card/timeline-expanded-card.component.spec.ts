import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineExpandedCardComponent } from './timeline-expanded-card.component';

describe('TimelineExpandedCardComponent', () => {
  let component: TimelineExpandedCardComponent;
  let fixture: ComponentFixture<TimelineExpandedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineExpandedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineExpandedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
