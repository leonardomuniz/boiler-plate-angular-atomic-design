import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-check-box',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.css'
})

export class CheckBoxComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false; 
  @Output() toggle = new EventEmitter<boolean>(); 

  onCheckboxChange(event: any) {
    this.toggle.emit(event.target.checked); 
  }
}
