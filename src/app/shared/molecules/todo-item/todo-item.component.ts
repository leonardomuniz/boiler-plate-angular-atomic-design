import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CheckBoxComponent } from '../../atoms/check-box/check-box.component';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CheckBoxComponent, ButtonComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() taskText: string = ''; 
  @Input() isCompleted: boolean = false; 
  @Output() markComplete = new EventEmitter<boolean>();
  @Output() deleteTask = new EventEmitter<void>();

  onToggleComplete(checked: boolean) {
    this.markComplete.emit(checked);
  }

  onDelete() {
    this.deleteTask.emit();
  }

}
