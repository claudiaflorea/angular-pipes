import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSliceComponent } from './employees-slice.component';

describe('EmployeesSliceComponent', () => {
  let component: EmployeesSliceComponent;
  let fixture: ComponentFixture<EmployeesSliceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesSliceComponent]
    });
    fixture = TestBed.createComponent(EmployeesSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
