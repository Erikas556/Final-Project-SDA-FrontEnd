import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiServerUrl}/all`);
  }

  public getTaskById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiServerUrl}/${id}`);
  }

  public addTask(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiServerUrl}/create`, task);
  }

  public updateTask(task: Todo, id: number): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiServerUrl}/update/${id}`, task);
  }

  public deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${id}`);
  }
}
