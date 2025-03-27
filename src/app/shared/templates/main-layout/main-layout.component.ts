import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { TodoListComponent } from '../../organisms/todo-list/todo-list.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [InputComponent, ButtonComponent, TodoListComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  @Input() tasks: { text: string, completed: boolean }[] = [];
  @Output() addTask = new EventEmitter<string>();
  @Output() updateTask = new EventEmitter<{ index: number, completed: boolean }>();
  @Output() removeTask = new EventEmitter<number>();

  newTask: string = '';

  onAddTask() {
    if (this.newTask.trim()) {
      this.addTask.emit(this.newTask);
      this.newTask = ''; 
    }
  }

  onUpdateTask(event: { index: number, completed: boolean }) {
    this.updateTask.emit(event);
  }

  onRemoveTask(index: number) {
    this.removeTask.emit(index);
  }
}