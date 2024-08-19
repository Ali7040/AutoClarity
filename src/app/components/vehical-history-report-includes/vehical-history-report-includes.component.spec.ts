import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalHistoryReportIncludesComponent } from './vehical-history-report-includes.component';

describe('VehicalHistoryReportIncludesComponent', () => {
  let component: VehicalHistoryReportIncludesComponent;
  let fixture: ComponentFixture<VehicalHistoryReportIncludesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicalHistoryReportIncludesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicalHistoryReportIncludesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
