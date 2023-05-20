import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesGradesComponent } from './employees-grades/employees-grades.component';
import { EmployeesDeptnoComponent } from './employees-deptno/employees-deptno.component';
import { EmployeesSliceComponent } from './employees-slice/employees-slice.component';

const routes: Routes = [
  { path: '', redirectTo: '/grades', pathMatch: 'full' },
  { path: 'grades', component: EmployeesGradesComponent },
  { path: 'slice', component: EmployeesSliceComponent },
  { path: 'deptno', component: EmployeesDeptnoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
