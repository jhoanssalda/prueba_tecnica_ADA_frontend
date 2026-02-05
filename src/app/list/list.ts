import { ChangeDetectorRef, Component } from '@angular/core';
import { Service } from '../services/service';
import { listData } from '../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-list',
  imports: [CommonModule, MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  dataSource = new MatTableDataSource<listData>();
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'company'];


  constructor(
    private service : Service,
    private cdRef: ChangeDetectorRef
  ) {}

  
  ngOnInit(){
    this.getData();
    this.cdRef.detectChanges();
    this.dataSource.filterPredicate = (data: any, filter: string) => {
    return data.toLowerCase().includes(filter);
  };

  }

  getData(){
    this.dataSource = this.service.getData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
