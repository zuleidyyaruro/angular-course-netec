import { Component } from '@angular/core';
import { FormTaskComponent } from "./components/form-task/form-task.component";
import { TableTaskComponent } from './components/table-task/table-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormTaskComponent, TableTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanager';
}
