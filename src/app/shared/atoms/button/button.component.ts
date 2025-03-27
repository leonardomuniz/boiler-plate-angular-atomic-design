import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Input() buttonText: string = '';
  @Output() buttonAction = new EventEmitter
}
