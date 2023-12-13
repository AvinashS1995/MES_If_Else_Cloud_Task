import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationHistoryGridComponent } from './transcation-history-grid.component';

describe('TranscationHistoryGridComponent', () => {
  let component: TranscationHistoryGridComponent;
  let fixture: ComponentFixture<TranscationHistoryGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranscationHistoryGridComponent]
    });
    fixture = TestBed.createComponent(TranscationHistoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
