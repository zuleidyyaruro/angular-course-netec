import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Priority } from '../../business/entities';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent {

  private service: TaskService = inject(TaskService);
  private builder: FormBuilder = inject(FormBuilder);
  priorityEnum = Priority;
  form = this.builder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]
    ],
    priority: [this.priorityEnum.MEDIUM],
    description: ['', [
      Validators.required,
      Validators.maxLength(120),
      Validators.minLength(10)
    ]
    ],
  });

  handleSubmit() {
    let task = {
      name: this.form.controls.name.value!,
      priority: this.form.controls.priority.value!,
      description: this.form.controls.description.value!,
      id: 0,
      done: false
    }

    this.service.insertTask(task);

    this.form.reset();
    console.log(this.service.getTasks());
  }


}
