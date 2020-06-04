import { async, TestBed } from '@angular/core/testing';
import { SharedUiDatetimeModule } from './shared-ui-datetime.module';

describe('SharedUiDatetimeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiDatetimeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiDatetimeModule).toBeDefined();
  });
});
