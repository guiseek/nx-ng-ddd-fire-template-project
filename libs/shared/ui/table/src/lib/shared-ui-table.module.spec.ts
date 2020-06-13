import { async, TestBed } from '@angular/core/testing';
import { SharedUiTableModule } from './shared-ui-table.module';

describe('SharedUiTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiTableModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiTableModule).toBeDefined();
  });
});
