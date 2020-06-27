import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ITodo } from '../interfaces/todo';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl: string = environment.apiUrl;

  constructor( private http: HttpClient) { }

  getTodos(): Observable<ITodo[]> {
    return this.http.get(`${this.apiUrl}/todos`).pipe(
      map((data) => {
        return data as ITodo[];
      })
    )
  }
}
