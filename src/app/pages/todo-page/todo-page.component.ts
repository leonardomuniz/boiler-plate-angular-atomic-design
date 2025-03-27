import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/templates/main-layout/main-layout.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  tasks: { text: string, completed: boolean }[] = [];

  onAddTask(taskText: string) {
    this.tasks.push({ text: taskText, completed: false });
  }

  onUpdateTask(event: { index: number, completed: boolean }) {
    this.tasks[event.index].completed = event.completed;
  }

  onRemoveTask(index: number) {
    this.tasks.splice(index, 1);
  }

}
