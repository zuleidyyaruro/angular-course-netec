import { Component, inject, signal, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../interfaces/dog.interface';
import { MatCardModule } from '@angular/material/card';

import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dog-table',
  standalone: true,
  imports: [MatCardModule, MatIconModule, RouterLink],
  templateUrl: './dog-table.component.html',
  styleUrl: './dog-table.component.css'
})
export class DogTableComponent implements OnInit {

  private service: DogService = inject(DogService);
  dogs = signal<Dog[]>([]);

  ngOnInit() {
    this.service.getDogs().subscribe({
      next: values => this.dogs.set(values),
      error: error => console.log(error)
    })
  }

  deleteDog(id: number) {
    this.service.deleteDog(id).subscribe({
      error: error => { console.log(error) }
    })
  }

}
