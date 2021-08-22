import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-chart',
  templateUrl: './todo-chart.component.html',
  styleUrls: ['./todo-chart.component.css'],
})
export class TodoChartComponent implements OnInit {
  public tasks: Todo[];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTasks();
  }

  onSubmit(form: NgForm) {
    let newTask: Todo = form.value;
    this.addTask(newTask);
    form.resetForm();
  }

  onComplete(){
    
  }

  public getTasks(): void {
    this.todoService.getTasks().subscribe(
      (response: Todo[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  public addTask(newTask: Todo): void {
    this.todoService.addTask(newTask).subscribe();
  }
}
