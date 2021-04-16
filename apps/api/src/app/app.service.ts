import { Injectable } from '@nestjs/common';

interface Todo {
  title: string;
}
@Injectable()
export class AppService {
  todo: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return [...this.todo];
  }

  addData(): Todo[] {
    this.todo.push({
      title: `Todo ${Math.floor(Math.random() * 1000)}`,
    });
    return [...this.todo];
  }
}
