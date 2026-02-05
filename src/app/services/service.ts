import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listData } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root',
})
export class Service {
  
  data:any;
  APIURL = "https://jsonplaceholder.typicode.com/users";

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    this.http.get<listData[]>(this.APIURL).subscribe(res =>{
      this.data = res ;
    });
    return this.data;
  }

}
