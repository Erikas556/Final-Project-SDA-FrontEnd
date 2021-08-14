import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseApiUrl = 'http://localhost:8080/todo';

  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseApiUrl}/all`);
  }

  public getTaskById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseApiUrl}/${id}`);
  }

  public addTask(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseApiUrl}/create`, task);
  }

  public updateTask(task: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseApiUrl}/update/${id}`, task);
  }

  public deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseApiUrl}/delete/${id}`);
  }
}
