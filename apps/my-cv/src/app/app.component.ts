import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
interface Todo {
  title: string;
}
@Component({
  selector: 'my-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  addTodo() {
    this.http.post<Todo[]>('/api/addTodo', {}).subscribe((t) => (this.todos = t));
  }

  fetch(): void {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }
}
