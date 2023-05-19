import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


const ELEMENT_DATA: EmployeeDetails[] = [
  {number: 1, name: 'Scott', deptno: 9, job: 'Lead'},
  {number: 2, name: 'Abrons', deptno: 4, job: 'Sales'},
  {number: 3, name: 'James', deptno: 6, job: 'PO'},
  {number: 4, name: 'Adam', deptno: 9, job: 'Lead'},
  {number: 5, name: 'Sathya', deptno: 10, job: 'Manager'},
  {number: 6, name: 'Maneesh', deptno: 2, job: 'Very poor'},
  {number: 7, name: 'Haneesh', deptno: 7, job: 'Programmer'},
  {number: 8, name: 'Maria', deptno: 5, job: 'BA'},
  {number: 9, name: 'Camilla', deptno: 8, job: 'Tester'},
  {number: 10, name: 'Jesus', deptno: 10, job: 'Manager'},
];


@Component({
  selector: 'app-employees-deptno',
  templateUrl: './employees-deptno.component.html',
  styleUrls: ['./employees-deptno.component.scss']
})

export class EmployeesDeptnoComponent implements OnInit {

  dataSource = new MatTableDataSource<EmployeeDetails>(ELEMENT_DATA).data;
  displayedColumns: string[] = ['number', 'name', 'job', 'deptno'];
  deptnoList: string[] = ['All', 'Managers', 'Programmers', 'Testers'];

    
  ngOnInit() {
    this.dataSource = new MatTableDataSource<EmployeeDetails>(ELEMENT_DATA).data;
  }

  displayAll() {
    this.dataSource = new MatTableDataSource<EmployeeDetails>(ELEMENT_DATA).data;
  }
  displayManagers() {
    this.ngOnInit();
    this.dataSource = this.dataSource.filter(item => (item.deptno === 10));
  }
  displayDevs() {
    this.ngOnInit();
    this.dataSource = this.dataSource.filter(item => (item.deptno === 7));
  }
  displayQA() {
    this.ngOnInit();
    this.dataSource = this.dataSource.filter(item => (item.deptno === 8));
  }


 
}

export interface EmployeeDetails {
  number: number;
  name: string;
  job: string;
  deptno: number;
}
