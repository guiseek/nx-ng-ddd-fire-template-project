import { async, TestBed } from '@angular/core/testing';
import { RootShellModule } from './root-shell.module';

describe('RootShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RootShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RootShellModule).toBeDefined();
  });
});
