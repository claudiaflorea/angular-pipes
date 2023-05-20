import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



const ELEMENT_DATA: Employee[] = [
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

@Component({
  selector: 'app-employees-slice',
  templateUrl: './employees-slice.component.html',
  styleUrls: ['./employees-slice.component.scss']
})

export class EmployeesSliceComponent implements OnInit {

  counter : number = 1;
  displayButton: Boolean = true;
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA).data.slice(0, 4);
  }

  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA).data;
  displayedColumns: string[] = ['position', 'name', 'grade', 'performance'];

  loadMore() {
    this.counter++;
    this.dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA).data;
    if (this.dataSource.length >= 4*this.counter) {
      this.dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA).data.slice(0, 4*this.counter);  
    } else {
      this.dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA).data;
      this.displayButton = false;
    }
    
  }

}

export interface Employee {
  position: number;
  name: string;
  grade: number;
  performance: string;
}
