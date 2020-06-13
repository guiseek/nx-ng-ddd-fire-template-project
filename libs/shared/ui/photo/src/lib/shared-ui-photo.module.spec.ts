import { async, TestBed } from '@angular/core/testing';
import { SharedUiPhotoModule } from './shared-ui-photo.module';

describe('SharedUiPhotoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiPhotoModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiPhotoModule).toBeDefined();
  });
});
