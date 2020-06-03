import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogShellComponent } from './catalog-shell.component';

describe('CatalogShellComponent', () => {
  let component: CatalogShellComponent;
  let fixture: ComponentFixture<CatalogShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
