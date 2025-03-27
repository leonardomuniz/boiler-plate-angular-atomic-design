import { Component } from '@angular/core';
import { TodoPageComponent } from "./pages/todo-page/todo-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TodoPageComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boiler-plate-angular-docker';
}
