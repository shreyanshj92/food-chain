import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { KEY_VALUE } from '../../constants/constant';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.scss'],
})
export class SharedTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() keyValuePairs = KEY_VALUE;
  @Input() displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];

  private _data = new BehaviorSubject<any>([]);
  @Input() set data(value: any) {
    this._data.next(value);
  }

  get data(): any {
    return this._data.getValue();
  }

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any[]>([]);
  pageIndex: number = 0;
  rowPerPage: number = 10;
  pageSizeOptions: number[] = [5, 10, 25];
  

  tableLength: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.getTableData();
  }
  
  getTableData() {
    this._data.subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource.data = response;
        this.rowPerPage = 10;
        this.pageIndex = 0;
        this.tableLength = !!response?.length;
      },
      (error: any) => console.log('Error: ', error)
    );
  }

  ngAfterViewInit() {
  setTimeout(()=>{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  },0)
    
  }

  paginatorEvent(pageEvent: any) {
    this.rowPerPage = pageEvent.pageSize;
    this.pageIndex = pageEvent.pageIndex;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
