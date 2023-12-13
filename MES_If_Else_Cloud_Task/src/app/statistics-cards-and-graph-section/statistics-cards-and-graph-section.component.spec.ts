import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsCardsAndGraphSectionComponent } from './statistics-cards-and-graph-section.component';

describe('StatisticsCardsAndGraphSectionComponent', () => {
  let component: StatisticsCardsAndGraphSectionComponent;
  let fixture: ComponentFixture<StatisticsCardsAndGraphSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticsCardsAndGraphSectionComponent]
    });
    fixture = TestBed.createComponent(StatisticsCardsAndGraphSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
