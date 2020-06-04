import { async, TestBed } from '@angular/core/testing';
import { SharedUiSelectModule } from './shared-ui-select.module';

describe('SharedUiSelectModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiSelectModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiSelectModule).toBeDefined();
  });
});
