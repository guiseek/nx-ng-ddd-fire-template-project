import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemCommonComponent } from './list-item-common.component';

describe('ListItemCommonComponent', () => {
  let component: ListItemCommonComponent;
  let fixture: ComponentFixture<ListItemCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItemCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
