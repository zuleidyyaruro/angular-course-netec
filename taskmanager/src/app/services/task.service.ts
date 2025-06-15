import { Injectable } from '@angular/core';
import { TaskUser } from '../business/entities';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: TaskUser[] = [];
  private idTask: number = 0;

  constructor() { }

  getTasks(): TaskUser[] {
    return this.tasks;
  }

  insertTask(task: TaskUser): void {
    if (this.tasks.length === 0) this.idTask = 0;
    task.id = this.idTask++;
    this.tasks.push(task);
  }

  deteleTask(id: number): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
