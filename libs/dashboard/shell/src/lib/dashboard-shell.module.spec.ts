import { async, TestBed } from '@angular/core/testing';
import { DashboardShellModule } from './dashboard-shell.module';

describe('DashboardShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DashboardShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DashboardShellModule).toBeDefined();
  });
});
