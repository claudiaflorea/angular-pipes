import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesDeptnoComponent } from './employees-deptno/employees-deptno.component';
import { EmployeesGradesComponent } from './employees-grades/employees-grades.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesDeptnoComponent,
    EmployeesGradesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
