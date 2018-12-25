import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePage } from './offline.page';

describe('OfflinePage', () => {
  let component: OfflinePage;
  let fixture: ComponentFixture<OfflinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
