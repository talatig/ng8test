import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<IEmployee>{
    return this.http.get<IEmployee>('https://reqres.in/api/users')
  }
}

interface IEmployee {
  name: 'string',
  age: number,
  data: any
}