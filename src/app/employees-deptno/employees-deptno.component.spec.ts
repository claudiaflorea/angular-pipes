import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDeptnoComponent } from './employees-deptno.component';

describe('EmployeesDeptnoComponent', () => {
  let component: EmployeesDeptnoComponent;
  let fixture: ComponentFixture<EmployeesDeptnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesDeptnoComponent]
    });
    fixture = TestBed.createComponent(EmployeesDeptnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
