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
  public tasks: Todo[] = [];
  public completedTasks: Todo[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTasks();
  }

  onSubmit(form: NgForm) {
    if (form.untouched) {
      alert('No task entered !');
    } else {
      let newTask: Todo = form.value;
      this.addTask(newTask);
      form.resetForm();
    }
  }

  onComplete(task: Todo) {
    this.taskComplete(task, task.id);
  }

  onDelete(task: Todo) {
    this.todoService.deleteTask(task.id).subscribe(
      (response: any) => {
        const idx = this.tasks.indexOf(task);
        task.isDone
          ? this.completedTasks.splice(idx, 1)
          : this.tasks.splice(idx, 1);
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  getTasks(): void {
    this.todoService.getTasks().subscribe(
      (response: Todo[]) => {
        response.forEach((task) => {
          task.isDone ? this.completedTasks.push(task) : this.tasks.push(task);
        });
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  addTask(newTask: Todo): void {
      this.todoService.addTask(newTask).subscribe(
        (response: Todo) => this.tasks.push(response), 
        (error: HttpErrorResponse) => alert(error.message)
      );
  }

  taskComplete(task: Todo, id: number): void {
    this.todoService.completeTask(task, id).subscribe(
      (response: Todo) => {
        this.completedTasks.push(response);
        const idx = this.tasks.indexOf(task);
        idx !== -1 ? this.tasks.splice(idx, 1) : alert('Task not found');
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }
}
