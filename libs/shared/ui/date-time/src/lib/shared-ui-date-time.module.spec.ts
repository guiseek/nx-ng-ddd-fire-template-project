import { async, TestBed } from '@angular/core/testing';
import { SharedUiDateTimeModule } from './shared-ui-date-time.module';

describe('SharedUiDateTimeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiDateTimeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiDateTimeModule).toBeDefined();
  });
});
