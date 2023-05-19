import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesGradesComponent } from './employees-grades.component';

describe('EmployeesGradesComponent', () => {
  let component: EmployeesGradesComponent;
  let fixture: ComponentFixture<EmployeesGradesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesGradesComponent]
    });
    fixture = TestBed.createComponent(EmployeesGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
