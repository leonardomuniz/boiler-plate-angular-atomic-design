import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormFieldModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() disabled: boolean = false;

  @Output() onInputChange = new EventEmitter<string>();

  emitChange(event: any) {
    this.onInputChange.emit(event.target.value)
  }
}
