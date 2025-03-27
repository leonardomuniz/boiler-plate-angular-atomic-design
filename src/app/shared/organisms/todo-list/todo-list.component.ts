import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItemComponent } from '../../molecules/todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasks: { text: string, completed: boolean }[] = [];
  @Output() updateTask = new EventEmitter<{ index: number, completed: boolean }>();
  @Output() removeTask = new EventEmitter<number>();

  onTaskComplete(index: number, completed: boolean) {
    this.updateTask.emit({ index, completed });
  }

  onTaskDelete(index: number) {
    this.removeTask.emit(index);
  }

}
