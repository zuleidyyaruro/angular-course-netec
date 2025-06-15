import { Component, inject, signal } from '@angular/core';
import { TaskUser } from '../../business/entities';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-table-task',
  standalone: true,
  imports: [],
  templateUrl: './table-task.component.html',
  styleUrl: './table-task.component.css'
})
export class TableTaskComponent {

  private service: TaskService = inject(TaskService);
  tasks = signal<TaskUser[]>([]);

  constructor() { }

  ngOnInit(): void {
    this.tasks.set(this.service.getTasks());
  }

  deleteTask(id: number): void {
    this.service.deteleTask(id);
    this.tasks.set(this.service.getTasks());
  }

}
