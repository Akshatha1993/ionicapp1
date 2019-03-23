import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentPage } from './list-student.page';

describe('ListStudentPage', () => {
  let component: ListStudentPage;
  let fixture: ComponentFixture<ListStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
