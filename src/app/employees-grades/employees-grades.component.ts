import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-grades',
  templateUrl: './employees-grades.component.html',
  styleUrls: ['./employees-grades.component.scss']
})
export class EmployeesGradesComponent {

  dataSource: Employee[] = [
    {position: 1, name: 'Scott', grade: 9, performance: 'Excellent'},
    {position: 2, name: 'Abrons', grade: 4, performance: 'Poor'},
    {position: 3, name: 'James', grade: 6, performance: 'Average'},
    {position: 4, name: 'Adam', grade: 9, performance: 'Excellent'},
    {position: 5, name: 'Sathya', grade: 10, performance: 'Outstanding'},
    {position: 6, name: 'Maneesh', grade: 2, performance: 'Very poor'},
    {position: 7, name: 'Haneesh', grade: 7, performance: 'Good'},
    {position: 8, name: 'Maria', grade: 5, performance: 'Average'},
    {position: 9, name: 'Camilla', grade: 8, performance: 'Good'},
    {position: 10, name: 'Jesus', grade: 10, performance: 'Outstanding'},
  ];

  displayedColumns: string[] = ['position', 'name', 'grade', 'performance'];
  
}

export interface Employee {
  position: number;
  name: string;
  grade: number;
  performance: string;
}

