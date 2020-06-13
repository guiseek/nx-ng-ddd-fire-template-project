import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropPhotoComponent } from './drop-photo.component';

describe('DropPhotoComponent', () => {
  let component: DropPhotoComponent;
  let fixture: ComponentFixture<DropPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
