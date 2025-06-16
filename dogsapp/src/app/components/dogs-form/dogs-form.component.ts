import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../interfaces/dog.interface';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dogs-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './dogs-form.component.html',
  styleUrl: './dogs-form.component.css'
})
export class DogsFormComponent {

  private service: DogService = inject(DogService);
  private build = inject(FormBuilder);
  private router = inject(Router)

  form = this.build.group({
    breed: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-z,A-Z,\s]/)]],
    description: ['', [Validators.required, Validators.maxLength(200), Validators.pattern(/^[a-z,A-Z,\s]/)]],
    urlImage: ['', [Validators.pattern(/(https?:\/\/.*\.(?:png|jpg|jpeg))/i), Validators.required, Validators.maxLength(200)]]

  })

  submit() {
    let breed = this.form.controls.breed.value!;
    let description = this.form.controls.description.value!;
    let urlImage = this.form.controls.urlImage.value!;

    let dog: Dog = {
      id: 0,
      breed,
      description,
      urlImage
    }

    this.service.insertDog(dog).pipe(
      take(1)).subscribe({
        next: value => {
          this.router.navigate(['dogs'])
        },
        error: error => console.log(error)
      })
  }
}
